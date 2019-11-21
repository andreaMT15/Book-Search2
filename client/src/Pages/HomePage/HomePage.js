import React, { useState } from 'react';
import { getData } from '../../lib/apiClient';
import './HomePage.css';

const HomePage = ({ history, searchTerm, setSearchTerm, setResults }) => {
    const [error, setError] = useState(null);
    let errorMessage = "Search cannot be empty. Please search for a book title.";

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const validate = (bookData) => {
        if (bookData === undefined) {
            errorMessage = "There were no results for that title. Please search for another title.";
            setError(errorMessage);
        } else if (bookData === "error") {
            errorMessage = "Oops something went wrong! Try again."
            setError(errorMessage);
        } else {
            setResults(bookData);
            setSearchTerm('');
            setError('');
            history.push('/results');
        };
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!searchTerm) {
            setError(errorMessage);
        } else {
            const bookData = await getData(searchTerm);
            validate(bookData);
        };
    };


    return (
        <div className="homepage-wrapper" data-testid="home">
            <div className="form-wrapper">
                <form className="search-input" type="submit">
                    <input className="search" type="text" name="search-input" value={searchTerm} placeholder="Search for a book title" onChange={handleChange} />
                    <button id="submit-btn" data-testid="search-btn" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            {!error ? "" :
                <div className="error-wrapper">
                    <div data-testid="error" className="error">{error}</div>
                </div>
            }
        </div >
    );
};

export default HomePage;
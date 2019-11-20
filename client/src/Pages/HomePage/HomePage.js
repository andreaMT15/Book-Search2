import React, { useState } from 'react';
import { getData } from '../../lib/apiClient';
import './HomePage.css';

const HomePage = ({ history, searchTerm, setSearchTerm, setResults }) => {
    const [error, setError] = useState(null);
    let errorMessage = "Please search for a valid book title.";

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const validate = async () => {
        const bookData = await getData(searchTerm);
        if (bookData === undefined) {
            errorMessage = "There were no results for that title. Please search for another title.";
            setError(errorMessage);
        } else if (bookData === "error") {
            errorMessage = "Oops something went wrong!"
            setError(errorMessage);
        } else {
            setResults(bookData);
            setSearchTerm('');
            setError('');
            history.push('/results');
        };
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!searchTerm) {
            setError(errorMessage);
        } else {
            validate();
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
                    <div className="error">{error}</div>
                </div>
            }
        </div >
    );
};

export default HomePage;
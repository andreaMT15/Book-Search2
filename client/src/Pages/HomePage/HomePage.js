import React, { useState } from 'react';
import { getData } from '../../lib/apiClient';

const HomePage = ({ history, searchTerm, setSearchTerm, setResults, results }) => {
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let errorMessage = "Please search for a valid book title."
        if (!searchTerm) {
            setError(errorMessage);
        } else {
            const bookData = await getData(searchTerm);
            if (bookData === undefined) {
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
        };
    };


    return (
        <div className="homepage-wrapper">
            <form type="submit">
                <input id="search-input" type="text" value={searchTerm} placeholder="Search for a book title" onChange={handleChange} />
                <button id="submit-btn" onClick={handleSubmit}>Submit</button>
            </form>
            <div className="error">{error}</div>
        </div>
    );
};

export default HomePage;
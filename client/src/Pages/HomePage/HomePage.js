import React from 'react';
import { getData } from '../../lib/apiClient';

const HomePage = ({ history, searchTerm, setSearchTerm, setResults }) => {
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bookData = await getData(searchTerm);
        setResults(bookData);
        history.push('/results');
    };

    return (
        <div>
            <form type="submit">
                <input type="text" value={searchTerm} placeholder="Search for a book title" onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default HomePage;
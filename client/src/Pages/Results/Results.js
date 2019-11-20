import React from 'react';
import './Results.css';

const ResultsPage = ({ history, results, readingList, setReadingList }) => {
    const setResults = () => {
        return (results.map(book => {
            return (
                {
                    id: book.id,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    publisher: book.volumeInfo.publisher,
                });
        }));
    };

    const check = () => {
        const volumeInfo = setResults();
        return (
            volumeInfo.map(result => {
                return ({
                    id: result.id,
                    title: result.title === undefined ? 'N/A' : result.title,
                    authors: result.authors === undefined ? 'N/A' : result.authors,
                    publisher: result.publisher === undefined ? 'N/A' : result.publisher
                });
            }));
    };


    const renderList = () => {
        const books = check();
        return books.map(book => {
            return (
                <div className="card-wrapper" data-testid="results" key={book.id}>
                    <div className="card-content">
                        <div>Title: {book.title}</div>
                        <div>Author: {book.authors === 'N/A' ? book.authors : book.authors.map(author => author)} </div>
                        <div>Publisher: {book.publisher}</div>
                        <button className="add-btn" onClick={() => {
                            setReadingList(prevState => [...prevState, { id: book.id, title: book.title, authors: book.authors, publisher: book.publisher }]);
                        }}>
                            Add to reading list
                        </button>
                    </div>
                </div >
            );
        });
    };

    const renderReadingList = () => {
        return readingList.map(item => {
            return (
                <div className="card-wrapper" key={item.id}>
                    <div className="card-content">
                        <div>Title: {item.title}</div>
                        <div>Author: {item.authors === "N/A" ? item.authors : item.authors.map(author => author)} </div>
                        <div>Publisher: {item.publisher}</div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="result-wrapper">
            <div data-testid="result-list" className="result-list">
                <div className="header sarch-header">
                    <div>Search Results</div>
                </div>
                {renderList()}
            </div>
            <div className="reading-list-wrapper">
                <div className=" header reading-list-header">
                    <div>My Reading List</div>
                    <button className="search-btn" onClick={() => { history.push('/') }}>Search Another Title</button>
                </div>
                <div className="reading-list">{renderReadingList()}</div>
            </div>
        </div>
    );
};

export default ResultsPage;
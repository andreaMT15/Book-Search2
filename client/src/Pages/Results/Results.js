import React from 'react';
import './Results.css';

const ResultsPage = ({ history, results, readingList, setReadingList }) => {
    let resultsArr = [];
    const setResults = () => {
        return (
            results.forEach(book => {
                let id = book.id
                let title = book.volumeInfo.title;
                let authors = book.volumeInfo.authors;
                let publisher = book.volumeInfo.publisher;

                if (title === undefined) {
                    title = "N/A";
                } else if (authors === undefined) {
                    authors = "N/A";
                } else if (publisher === undefined) {
                    publisher = "N/A"
                }

                let resultsObj = {
                    id,
                    title,
                    authors,
                    publisher
                };
                resultsArr.push(resultsObj);
            })
        );
    };

    const renderList = () => {
        setResults();
        return resultsArr.map(book => {
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
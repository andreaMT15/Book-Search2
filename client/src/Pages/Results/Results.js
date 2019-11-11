import React from 'react';

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
                <div key={book.id}>
                    <div>Title: {book.title}</div>
                    <div>Author: {book.authors.map(author => author)} </div>
                    <div>Publisher: {book.publisher}</div>
                    <button onClick={() => {
                        setReadingList(prevState => [...prevState, { id: book.id, title: book.title, authors: book.authors, publisher: book.publisher }]);
                    }}>
                        Add to reading list
                        </button>
                </div >
            );
        });
    };

    const renderReadingList = () => {
        return readingList.map(item => {
            return (
                <div key={item.id}>
                    <div>Title: {item.title}</div>
                    <div>Author: {item.authors.map(author => author)} </div>
                    <div>Publisher: {item.publisher}</div>
                </div>
            );
        });
    };

    return (
        <div>
            <div>{renderList()}</div>
            <button onClick={() => { history.push('/') }}>Search Another Title</button>
            <div>Reading List</div>
            <div>{renderReadingList()}</div>
        </div>
    );
};

export default ResultsPage;
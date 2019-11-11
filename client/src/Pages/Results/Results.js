import React from 'react';


const ResultsPage = ({ history, results, setReadingList }) => {

    const renderList = () => {
        return (
            results.map(book => {
                const title = book.volumeInfo.title;
                const authors = book.volumeInfo.authors;
                const publisher = book.volumeInfo.publisher;
                return (
                    <div key={book.id}>
                        <div>Title: {!title ? "N/A" : title}</div>
                        <div>Author: {!authors ? "N/A" : authors.map(author => author)} </div>
                        <div>Publisher: {!publisher ? "N/A" : publisher}</div>
                        <button onClick={() => {
                            setReadingList(prevState => [...prevState, { title, authors, publisher }]);
                        }}>
                            Add to reading list
                        </button>
                    </div >
                )
            })
        )
    };

    return (
        <div>
            <div>{renderList()}</div >
            <button onClick={() => { history.push('/') }}>Search Another Title</button>
        </div>
    );
};

export default ResultsPage;
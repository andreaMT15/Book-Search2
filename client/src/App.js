import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import ResultsPage from './Pages/Results/Results';

const useStateWithLocalStorage = localStorageKey => {
  const [readingList, setReadingList] = React.useState(
    () => JSON.parse(localStorage.getItem('list')) || []
  );
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(readingList));
  }, [readingList]);
  return [readingList, setReadingList];
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [readingList, setReadingList] = useStateWithLocalStorage('list');

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setResults={setResults} />} />
          <Route exact path="/results" render={props => <ResultsPage {...props} setReadingList={setReadingList} results={results} readingList={readingList} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import ResultsPage from './Pages/Results/Results';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setResults={setResults} />} />
          <Route exact path="/results" render={props => <ResultsPage {...props} results={results} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;

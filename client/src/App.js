import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import ResultsPage from './Pages/Results/Results';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} />} />
          <Route exact path="/results" render={props => <ResultsPage {...props} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;

import React,{Fragment} from 'react';
import './App.css';
import SearchForm from '../src/components/SearchForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchResult from './components/SearchResult'

function App() {
  return (
    <Router>
    <Fragment>
      <Route exact path="/" component={SearchForm} />
      <Switch>
      <Route exact path="/results" component={SearchResult} />
      </Switch>
    </Fragment>
</Router>

  );
}

export default App;

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from '../src/components/redux/store';
import SearchForm from '../src/components/SearchForm';
import './App.css';
import SearchResult from './components/SearchResult';

const store = Store()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
          <Route exact path="/" component={SearchForm} />
            <Route exact path="/results" component={SearchResult} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

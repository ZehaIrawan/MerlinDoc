import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../src/components/redux/store';
import SearchForm from '../src/components/SearchForm';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={SearchForm} />
            <Route exact path="/results" component={SearchResult} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

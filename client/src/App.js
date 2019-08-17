import React from 'react';
import './App.css';
import SearchForm from '../src/components/Search';

import Filter from '../src/components/Filter';

function App() {
  return (
      <div className="body">
        <Filter />
        <SearchForm />
      </div>
  );
}

export default App;

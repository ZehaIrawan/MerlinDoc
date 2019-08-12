import React from 'react';
import './App.css';
import Search from '../src/components/Search';

import Filter from '../src/components/Filter';

function App() {
  return (
    <div className="App">
      <div className="body">
        <Filter />
        <Search />
      </div>
    </div>
  );
}

export default App;

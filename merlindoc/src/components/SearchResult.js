import React from 'react';
import Filter from './Filter';
import Search from './Search';
import SearchBar from './SearchBar';

const SearchResult = () => {
  return (
    <div>
      <SearchBar />
      <Filter></Filter>
      <Search />
    </div>
  );
};

export default SearchResult;

import React,{Fragment} from 'react';
import Filter from './Filter';
import Footer from './Footer';
import Navbar from './Navbar';
import Search from './Search';
import SearchBar from './SearchBar';

const SearchResult = () => {
  return (
    <Fragment>
      <Navbar />
      <SearchBar />
      <Filter></Filter>
      <Search />
      <Footer />
    </Fragment>
  );
};

export default SearchResult;

import React, { Fragment, useState } from 'react';
import Search from './Search';

const SearchForm = () => {
  const [keyword, setKeyword] = useState();

  const [url, setUrl] = useState(
    'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=pediatrician&location=NY&gender=female&sort=rating-desc&skip=0&limit=10&user_key=54d8891c53833b37e5ea78a241baa9f7',
  );
  return (
    <Fragment>
      <div className="searchForm">
        <h2>Search Form</h2>
        <br />
        <input
          placeholder="Your State"
          type="text"
          value={keyword}
          onChange={event => setKeyword(event.target.value)}
        />
        <br />
        <button
          className="button"
          type="submit"
          onClick={() =>
            setUrl(
              `https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=pediatrician&location=${keyword}&gender=female&sort=rating-desc&skip=0&limit=10&user_key=54d8891c53833b37e5ea78a241baa9f7`,
            )
          }
        >
          Search
        </button>
      </div>
      <Search url={url}/>
    </Fragment>
  );
};

export default SearchForm;

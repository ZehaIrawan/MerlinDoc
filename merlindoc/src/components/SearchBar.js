import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AutoCompleteText from './auto/AutoCompleteText';
import { updateInput } from './redux/actions';

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = process.env.REACT_APP_API_URL

const SearchBar = ({ query, updateInput }) => {
  useEffect(() => {
    // // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  const [formData, setFormData] = useState({
    location: '',
    sympton: '',
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [url, setUrl] = useState(
    `${API_URL}&location=${query.location}&gender=female&sort=rating-desc&skip=0&limit=10&user_key=${API_KEY}`,
  );

  const onSubmit = e => {
    e.preventDefault();
    // updateInput(formData);
    setUrl(
      `${API_URL}&location=${query.location}&gender=female&sort=rating-desc&skip=0&limit=10&user_key=${API_KEY}`,
    );
  };

  return (
    <div>
       <div className="searchForm">
        <h2>Search Form</h2>
        <AutoCompleteText />
        {/* <HideableText text="Dynamic Text!" /> */}
        <br />
        <form className="form" onSubmit={e => onSubmit(e)}>
          {/* <input
            placeholder="New York, NY"
            name="location"
            type="text"
            onChange={e => onChange(e)}
            required
          /> */}
          <br />
          <input
            placeholder="Your Symptom"
            name="sympton"
            type="text"
            onChange={e => onChange(e)}
            // required
          />
          <button className="button" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* <Search url={url} /> */}
    </div>
  );
};

const mapStateToProps = state => ({
 query: state.search.query,
});

const mapDispatchToProps = {
  updateInput,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

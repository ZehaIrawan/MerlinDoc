import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { updateInput } from './redux/actions';

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
    `https://api.betterdoctor.com/2016-03-01/doctors?&location=${query.location}&gender=female&sort=rating-desc&skip=0&limit=10&user_key=54d8891c53833b37e5ea78a241baa9f7`,
  );

  const onSubmit = e => {
    e.preventDefault();
    updateInput(formData);
    setUrl(
      `https://api.betterdoctor.com/2016-03-01/doctors?&location=${query.location}&gender=female&sort=rating-desc&skip=0&limit=10&user_key=54d8891c53833b37e5ea78a241baa9f7`,
    )
  };

  return (
    <div>
      <div className="searchForm">
        <h2>Search Form</h2>
        <br />
        <form className="form" onSubmit={e => onSubmit(e)}>
          <input
            placeholder="Your State"
            name="location"
            type="text"
            onChange={e => onChange(e)}
            required
          />
          <br />
          <input
            placeholder="Your Symptom"
            name="sympton"
            type="text"
            onChange={e => onChange(e)}
          />
          <button
            className="button"
            type="submit"
            // onClick={() =>
            //   setUrl(
            //     `https://api.betterdoctor.com/2016-03-01/doctors?query=${formData.sympton}&location=${formData.location}&limit=10&user_key=54d8891c53833b37e5ea78a241baa9f7`,
            //   )
            // }
          >
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

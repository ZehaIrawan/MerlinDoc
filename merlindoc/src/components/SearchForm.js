import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AutoCompleteText from './auto/AutoCompleteText';
import { updateInput } from './redux/actions';

const SearchForm = ({ updateInput }) => {
  const [formData, setFormData] = useState({
    location: '',
    sympton: '',
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const [redirect, setRedirect] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    // updateInput(formData);
    setRedirect(true);
  };

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: '/results',
        }}
      />
    );
  }

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
  count: state.search.query,
});

const mapDispatchToProps = {
  updateInput,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);

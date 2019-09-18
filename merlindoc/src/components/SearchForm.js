import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AutoCompleteText from './auto/AutoCompleteText';
import Footer from './Footer';
import Navbar from './Navbar';
import { updateInput } from './redux/actions';

const SearchForm = ({ updateInput }) => {
  const [formData, setFormData] = useState({
    location: '',
    sympton: '',
  });

  // React.useEffect(() => {
  //   const data = localStorage.getItem('search');
  //   if (data) {
  //     setFormData(JSON.parse(data));
  //   }
  // }, []);

  // React.useEffect(() => {
  //   localStorage.setItem('search', JSON.stringify(formData));
  // });

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
      <Navbar />
      <div className="searchHome">
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
          {/* <input
            placeholder="Your Symptom"
            name="sympton"
            type="text"
            onChange={e => onChange(e)}
            // required
          /> */}
          <button className="button" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* <Search url={url} /> */}
      <Footer></Footer>
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
)(SearchForm);

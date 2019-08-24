import React,{useState} from 'react';
import { connect } from 'react-redux';
import { decrement, increment, reset, updateInput } from './redux/actions';

const SearchForm = ({ handleChange, updateInput }) => {
  const [formData, setFormData] = useState({
    location: '',
    sympton: '',
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // const [redirect, setRedirect] = useState(false);

  handleChange = e => {
    updateInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    updateInput(formData)
  };

  // if (redirect) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: '/results',
  //         state: { url: url },
  //       }}
  //     />
  //   );
  // }

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
  count: state.search.query,
});

const mapDispatchToProps = {
  decrement,
  increment,
  reset,
  updateInput,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);

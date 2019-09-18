import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Ads from '../components/Ads';
import DoctorCard from '../components/DoctorCard';
import Pagination from './Pagination';
import { updateInput } from './redux/actions';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const Search = ({ query }) => {
  const [doctor, setDoctor] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(5);

  let url = `${API_URL}&location=${query.location}&gender=female&sort=rating-desc&skip=0&limit=20&user_key=${API_KEY}`;

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(url);
      setDoctor(res);
      setIsLoading(false);
    }
    fetchData();
  }, [url]);

  if (IsLoading) {
    return <div className="loading">Loading ...</div>;
  }

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = doctor.data.data.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="search">
      <h1 style={{ color: '#15959a', marginLeft: '25%' }}>
        {`Search result for ${query.location}`}
      </h1>
      <Ads />
      {currentPosts.map(doctor => (
        <DoctorCard
          key={doctor.profile.slug}
          name={`${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}`}
          profileImg={doctor.profile.image_url}
          address={`${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state_long} `}
          specialties={doctor.specialties.map(s => `${s.actor} ,`)}
          phoneNumber={doctor.practices[0].phones[0].number}
        />
      ))}
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={doctor.data.data.length}
        paginate={paginate}
      />
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
)(Search);

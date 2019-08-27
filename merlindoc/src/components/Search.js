import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Ads from '../components/Ads';
import DoctorCard from '../components/DoctorCard';
import Filter from '../components/Filter';
import { connect } from 'react-redux';
import { updateInput } from './redux/actions';

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = process.env.REACT_APP_API_URL

const Search = ({query}) => {
  const [doctor, setDoctor] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  let url = `${API_URL}&location=${query.location}&gender=female&sort=rating-desc&skip=0&limit=10&user_key=${API_KEY}`

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(url);
      setDoctor(res);
      setIsLoading(false);
    }
    fetchData();
  }, [url]);

  if (IsLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="search">
      <h1 style={{ color: 'blue', marginLeft: '25%' }}>Search</h1>
      {doctor.data.data.map(doctor => (
        <DoctorCard
          key={doctor.profile.slug}
          name={`${doctor.profile.first_name} ${doctor.profile.last_name}, ${
            doctor.profile.title
          }`}
          profileImg={doctor.profile.image_url}
          address={`${doctor.practices[0].visit_address.street}, ${
            doctor.practices[0].visit_address.city
          }, ${doctor.practices[0].visit_address.state_long} `}
          specialties={doctor.specialties.map(s => `${s.actor} ,`)}
          phoneNumber={doctor.practices[0].phones[0].number}
        />
      ))}
      <Ads />
    </div>
  );
};


const mapStateToProps = state => ({
  query: state.search.query,
});

const mapDispatchToProps = {
  updateInput,
};
export default connect(mapStateToProps,mapDispatchToProps)(Search);

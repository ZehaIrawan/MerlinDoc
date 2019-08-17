import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Ads from '../components/Ads';
// import data from '../data/data';
import DoctorCard from '../components/DoctorCard';

const Search = props => {
  const [doctor, setDoctor] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  const { url } = props;

  console.log(url);
  // const [countyState, countyState] = useState('NY');

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

export default Search;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Ads from '../components/Ads';
import DoctorCard from '../components/DoctorCard';
import Filter from '../components/Filter';

const Search = props => {
  const [doctor, setDoctor] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  let { url } = props;

  url =
    url === undefined
      ? (url =
          'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=pediatrician&location=NY&gender=female&sort=rating-desc&skip=0&limit=10&user_key=54d8891c53833b37e5ea78a241baa9f7')
      : url;

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

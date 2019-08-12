import React, { useState, useEffect } from 'react';
import data from '../data/data';
import DoctorCard from '../components/DoctorCard';
import Ads from '../components/Ads';
import axios from 'axios';

const Search = () => {
  const [doctor, setDoctor] = useState();
  const [count, setCount] = useState(0);

  useEffect(async() => {
   const res = await axios.get('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=pediatrician&location=CA&gender=female&sort=rating-desc&skip=0&limit=10&user_key=54d8891c53833b37e5ea78a241baa9f7')
    setDoctor(res)
    // console.log(res)
  },[]);

  console.log(doctor)
  return (
    <div>
       <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
      <Ads />
      <h1 style={{ color: 'blue', marginLeft: '25%' }}>Search</h1>
      {data[0].data.map(doctor => (
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
    </div>
  );
};

export default Search;

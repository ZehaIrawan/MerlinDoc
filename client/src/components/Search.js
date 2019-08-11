import React from 'react';
import data from '../data/data';
import DoctorCard from '../components/DoctorCard';
import Ads from '../components/Ads';

const Search = () => {
  return (
    <div>
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

import React from 'react';
import DoctorCard from '../components/DoctorCard';
import ads from '../data/ads';

const Ads = () => {
  return (
    <div className="ads">
      <h3 style={{ color: '#15959a' }}>Sponsored</h3>
      {ads[0].data.map(doctor => (
        <DoctorCard
          key={doctor.profile.slug}
          name={`${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}`}
          profileImg={doctor.profile.image_url}
          address={`${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state_long} `}
          specialties={doctor.specialties.map(s => `${s.actor} ,`)}
          phoneNumber={doctor.practices[0].phones[0].number}
        />
      ))}
    </div>
  );
};

export default Ads;

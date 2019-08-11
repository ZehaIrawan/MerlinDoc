import React from 'react';

const DoctorCard = props => {
  const { name, profileImg, address, specialties, phoneNumber } = props;
  return (
    <div className="doctorCardContainer">
      <img src={profileImg} alt={profileImg} />
      <h2>{name}</h2>
      <p>{specialties}</p>
      <h3>Address</h3>
      <p>{address}</p>
      <button>View Profile</button>
      <h4>Call {phoneNumber}</h4>
      <div>
        <a href="http://google.com">View on map</a>
      </div>
      <br />
    </div>
  );
};

export default DoctorCard;

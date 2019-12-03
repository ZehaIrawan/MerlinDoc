import React from 'react';

const DoctorCard = props => {
  const { name, profileImg, address, specialties, phoneNumber } = props;
  return (
    <div className="doctorCardContainer">
      <div>
        <img src={profileImg} alt="doctor-profile"/>
      </div>
      <div className="doctorText">
        <h2>{name}</h2>
        <p>{specialties}</p>
        <h3>Address</h3>
        <p>{address}</p>
        <button className="button">
          <a href={`https://www.google.com/search?q=${name} Profile`}>
            View Profile
          </a>
        </button>
        <button className="button">
          <a href={`https://www.google.com/search?q=${name} Map`}>
            View on map
          </a>
        </button>
      </div>
      <div className="phone">
        <h4>CALL</h4>
        <h3>{phoneNumber}</h3>
      </div>
    </div>
  );
};

export default DoctorCard;

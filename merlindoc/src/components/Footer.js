import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <h3>Logo</h3>
        <p>
          Devias.io is a one-stop shop for finding healthcare providers across
          specialties. Finding a healthcare provider can be challenging.
        </p>
      </div>
      <ul>
        <h3>FEATURES</h3>
        <li>Find Doctors</li>
        <li>Add a provider listing</li>
        <li>About</li>
        <li>Mission</li>
      </ul>
      <ul>
        <h3>COMPANY</h3>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Careers</li>
        <li>Contact Us</li>
      </ul>
      <div>
        <h3>FOLLOW</h3>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>FB</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

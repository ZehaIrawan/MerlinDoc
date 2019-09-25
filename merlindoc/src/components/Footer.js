import React from 'react';
import { GiHealthPotion } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <a href="/">
          <GiHealthPotion size={40} style={{ color: '#15959a' }} />
        </a>
        <p>
          Devias.io is a one-stop shop for finding healthcare providers across
          specialties. Finding a healthcare provider can be challenging.
        </p>
      </div>
      <ul>
        <h3>FEATURES</h3>
        <li>
          <Link to="/">Find Doctors</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <ul>
        <h3>COMPANY</h3>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div>
        <h3>FOLLOW</h3>
        <ul>
          <li>
            <a
              href="https://www.twitter.com/zehairawan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/zehairawan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/JangkarBumi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

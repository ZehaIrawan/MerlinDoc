import React, { Fragment } from 'react';
import { GiHealthPotion } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Fragment>
      <ul className="nav">
        <li>
          <a href="/">
            <GiHealthPotion size={40} />
          </a>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;

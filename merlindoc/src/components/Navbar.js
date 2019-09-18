import React, { Fragment } from 'react';
import { GiHealthPotion } from 'react-icons/gi';
const Navbar = () => {
  return (
    <Fragment>
      <ul className="nav">
        <li>
          <a href="/">
            <GiHealthPotion size={40} />
          </a>
        </li>
        <li>About</li>
        <li>Directory</li>
        <li>Contact Us</li>
        <li>Add a provider listing</li>
        <li>Provider Login</li>
      </ul>
    </Fragment>
  );
};

export default Navbar;

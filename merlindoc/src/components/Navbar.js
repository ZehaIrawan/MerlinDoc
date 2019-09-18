import React,{Fragment} from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <ul className="nav">
        <li>Logo</li>
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

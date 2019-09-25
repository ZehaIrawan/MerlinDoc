import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const NotFound = () => {
  return (
    <div className="lost">
      <Navbar />
      <h1>
        Page not found <br /> <a href="./">Home Page</a>
      </h1>
      <img
        src="https://live.staticflickr.com/8199/8204940090_18f9d8752c_b.jpg"
        alt=""
      />
      <Footer />
    </div>
  );
};

export default NotFound;

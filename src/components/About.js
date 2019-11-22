import React, { Fragment } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const About = () => {
  return (
    <Fragment>
      <Navbar />

      <div className="content">
        <div className="about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum amet eligendi laboriosam voluptatibus voluptates? Beatae, accusamus ad corrupti, dolorum ut error dicta et dignissimos repellat quod provident dolorem sit cumque laborum itaque magni debitis assumenda natus quidem rerum explicabo fugit nam maxime?</div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;

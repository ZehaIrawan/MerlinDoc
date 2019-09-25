import React, { Fragment } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="contact" id="contact">
        <h3>Contact Me</h3>
        <form
          name="contact"
          method="post"
          data-netlify-recaptcha="true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label>
              Your Name:
              <input type="text" name="name" className="form-name" />
            </label>

            <p>
              <label>
                Your Email:
                <input type="email" name="email" className="form-email" />
              </label>
            </p>
          </div>
          <p>
            <label>
              Message:
              <textarea name="message" className="form-message"></textarea>
            </label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button className="submit" type="submit">
              Send
            </button>
          </p>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;

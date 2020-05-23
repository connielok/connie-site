import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h1>Get in Touch</h1>
      <div className="contact">
        <p>
          I am currently looking for new opportunities. If you're interested in
          working together, please send me a message here or through{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/conniehlok/"
          >
            Linkedin
          </a>
          .
        </p>
      </div>
      <form action="/contact">
        <div className="form-group">
          <label forhtml="name">Full Name</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label forhtml="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className="form-group">
          <label forhtml="message">Message</label>
          <input type="text" name="message" />
        </div>
      </form>
    </div>
  );
};

export default Contact;

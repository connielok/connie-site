import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/conniehlok/"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/connielok"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/likeclokwork"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/likeclokwork"
        >
          <i className="fab fa-twitter-square"></i>
        </a>
      </div>
      <div className="copyright">
        <p>Connie Lok</p>
        <p>
          <i className="far fa-copyright"></i> 2020 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

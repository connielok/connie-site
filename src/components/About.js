import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="about">
        <h4>Hi, I'm Connie.</h4>
        <p>I'm a software engineer based in NYC.</p>
        <p>
          My background is in electrical engineering. I worked in the
          MEP/construction industry for 4 years before deciding to make a switch
          to the software industry. I love coding like I love puzzles - it may
          take a while to to figure out the patterns and see things the right
          frame of mind, but it's so satisfying when all the pieces finally fit
          together.
          {/* ...syntax, grammar, learning languages*/}
        </p>
        <p>
          These are some of the technologies I've been working with recently:
        </p>
        <ul className="tech">
          <li>
            <i className="fas fa-angle-double-right"></i>JavaScript (ES6)
          </li>
          <li>
            <i className="fas fa-angle-double-right"></i>React
          </li>
          <li>
            <i className="fas fa-angle-double-right"></i>Redux
          </li>
          <li>
            <i className="fas fa-angle-double-right"></i>Node.js
          </li>
          <li>
            <i className="fas fa-angle-double-right"></i>Express
          </li>
          <li>
            <i className="fas fa-angle-double-right"></i>Sequelize
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

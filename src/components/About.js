import React from 'react';
import { Typography, Container, Link } from '@material-ui/core';
import resume from '../documents/ConnieLok_Resume.pdf';

const About = () => {
  return (
    <div>
      <Container>
        <Typography variant="h3">Hi, I'm Connie.</Typography>
        <div className="about">
          <Typography variant="body1">
            I'm a software engineer based in NYC.
          </Typography>
          <Typography variant="body1">
            I love coding like I love puzzles - it may take a while to to figure
            out the patterns, but it's so satisfying when all the pieces finally
            fit together. I worked in the building design/construction industry
            as an electrical engineer for 4 years before deciding to make a
            switch to the software industry.
          </Typography>
          <Typography variant="h5" style={{ fontWeight: 700 }}>
            Check me out on{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/connielok/"
            >
              LinkedIn
            </Link>{' '}
            or view my{' '}
            <Link target="_blank" rel="noopener noreferrer" href={resume}>
              resume
            </Link>{' '}
            for more information.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default About;

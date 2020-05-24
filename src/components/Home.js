import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Home = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h3">Software Engineer.</Typography>
        <div className="intro">
          <p>
            Hi there! I'm a recent graduate from The Grace Hopper Program at
            Fullstack Academy. Coding makes me happy. :)
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Home;

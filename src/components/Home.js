import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Home = (props) => {
  return (
    <div className="home">
      <Container maxWidth="md">
        <Typography variant="h3">Software Engineer.</Typography>
      </Container>
    </div>
  );
};

export default Home;

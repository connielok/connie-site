import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Icons from './Icons';

const Home = () => {
  return (
    <div
      className="home"
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" align="center">
          Connie Lok
        </Typography>
        <Typography variant="h4" align="center">
          Software Engineer
        </Typography>
        <Icons />
      </Container>
    </div>
  );
};

export default Home;

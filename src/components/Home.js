import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Icons from './Icons';
import homeImage from './img/home-girl-interests.png';

const Home = () => {
  return (
    <div className="home">
      <Container
        maxWidth="md"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '90vh',
        }}
      >
        <Typography variant="h1" align="center">
          Connie Lok
        </Typography>
        <Typography variant="h4" align="center">
          Software Engineer
        </Typography>
        <img
          src={homeImage}
          alt="girl coder and other interests"
          style={{ height: '30rem' }}
        />
        <Icons />
      </Container>
    </div>
  );
};

export default Home;

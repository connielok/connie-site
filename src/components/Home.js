import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import landingImage from './img/home-girl-interests.png';

const useStyles = makeStyles((theme) => ({
  img: {
    [theme.breakpoints.down('sm')]: {
      height: '15rem',
    },
    [theme.breakpoints.up('md')]: {
      height: '30rem',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Container
        maxWidth="md"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1" align="center" style={{ fontWeight: '700' }}>
          Connie Lok
        </Typography>
        <Typography
          variant="h4"
          align="center"
          style={{ paddingBottom: '2rem' }}
        >
          Software Engineer
        </Typography>
        <img
          className={classes.img}
          src={landingImage}
          alt="girl coder and other interests"
        />
      </Container>
    </div>
  );
};

export default Home;

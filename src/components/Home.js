import React from 'react';
import { Typography, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import landingImage from './img/home-girl-interests.png';

const useStyles = makeStyles((theme) => ({
  img: {
    [theme.breakpoints.down('sm')]: {
      height: '15rem',
    },
    [theme.breakpoints.up('sm')]: {
      height: '30rem',
    },
  },
  credit: {
    fontSize: '0.5rem',
    fontWeight: 300,
  },
  header: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem',
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
        <Typography
          variant="h1"
          align="center"
          className={classes.header}
          style={{ fontWeight: '700' }}
        >
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
        <Typography variant="caption" className={classes.credit}>
          illustration by{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com/"
          >
            {' '}
            icons8.com{' '}
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Home;

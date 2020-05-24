import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Button } from '@material-ui/core';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <Typography variant="h2" className="my-name">
          connie lok
        </Typography>
      </Link>
      <nav>
        <Grid container spacing={2}>
          <Grid item>
            <Button component={Link} to={'/about'}>
              About
            </Button>
          </Grid>

          <Grid item>
            <Button component={Link} to={'/projects'}>
              Projects
            </Button>
          </Grid>

          <Grid item>
            <Button component={Link} to={'/resume'}>
              Resume
            </Button>
          </Grid>

          <Grid item>
            <Button component={Link} to={'/contact'}>
              Contact
            </Button>{' '}
          </Grid>
        </Grid>
      </nav>
    </div>
  );
};

export default Header;

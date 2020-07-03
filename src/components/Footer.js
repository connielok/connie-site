import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Icons from './Icons';

const Footer = () => {
  return (
    <div className="footer" style={{ marginTop: '1.5rem' }}>
      <Icons />
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Typography variant="caption">Connie Lok</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

import React from 'react';
import { Link, Grid, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <div className="footer">
      <Grid container direction="column" align="center">
        <Grid container item spacing={3} justify="center">
          <Grid item>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/conniehlok/"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </Grid>
          <Grid item>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/connielok"
            >
              <i className="fab fa-github"></i>
            </Link>
          </Grid>
          <Grid item>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/likeclokwork"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </Grid>
          <Grid item>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/likeclokwork"
            >
              <i className="fab fa-twitter-square"></i>
            </Link>
          </Grid>
        </Grid>
        <Grid item container spacing={3} justify="center">
          <Grid item>
            <Typography variant="caption">Connie Lok</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              &copy; 2020 All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

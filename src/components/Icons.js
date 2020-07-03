import React from 'react';
import { Link, Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const Icons = (props) => {
  return (
    <div>
      <Grid container direction="column" align="center">
        <Grid container item spacing={3} justify="center">
          <Grid item>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/conniehlok/"
            >
              <LinkedInIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/connielok"
            >
              <GitHubIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/likeclokwork"
            >
              <TwitterIcon />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Icons;

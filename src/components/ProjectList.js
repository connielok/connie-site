import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import Project from './Project';

const ProjectList = () => {
  return (
    <div className="projects">
      <Container maxWidth="lg">
        <Typography variant="h3">Projects</Typography>
        <div className="project-list">
          <Grid container spacing={4}>
            <Project />
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default ProjectList;

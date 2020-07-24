import React, { useState } from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import Projects from './Projects';
import projectsArr from '../projects';

const ProjectList = () => {
  const [projects] = useState(projectsArr);

  return (
    <div className="projects">
      <Container maxWidth="md">
        <Typography variant="h3">Projects</Typography>
        <div className="project-list">
          <Grid container spacing={4}>
            {projects.length ? <Projects projects={projects} /> : null}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default ProjectList;

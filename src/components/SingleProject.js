import React, { useState } from 'react';
import { Typography, Container } from '@material-ui/core';
import projectsArr from '../projects';

const SingleProject = (props) => {
  const [project] = useState(projectsArr[props.match.params.id - 1]);

  return (
    <div className="project">
      <Container maxWidth="md">
        <Typography variant="h3">{project.title}</Typography>
        <img alt="project" src={`${project.image}`} height="300rem" />
        <Typography variant="body2">{project.description}</Typography>
      </Container>
    </div>
  );
};

export default SingleProject;

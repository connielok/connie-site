import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import Projects from './Projects';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('/api/projects');
        setProjects(data);
      } catch (error) {
        console.log('error fetching projects on front end!');
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="project-list">
      <Container maxWidth="md">
        <Typography variant="h3">Projects</Typography>
        <div className="projects">
          <Grid container spacing={2}>
            {projects.length ? <Projects projects={projects} /> : null}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default ProjectList;

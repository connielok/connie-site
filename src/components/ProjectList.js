import React, { useState } from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import Projects from './Projects';
// import axios from 'axios';

const projectsArr = [
  {
    id: 1,
    title: 'Grace Shopper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    shortDesc: 'd',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    title: 'Stackathon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    shortDesc: 'Stackathon project.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    title: 'Capstone',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    shortDesc: 'Capstone project.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const ProjectList = () => {
  const [projects] = useState(projectsArr);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const { data } = await axios.get('/api/projects');
  //       setProjects(data);
  //     } catch (error) {
  //       console.log('error fetching projects on front end!');
  //     }
  //   };
  //   fetchProjects();
  // }, []);

  return (
    <div className="projects">
      <Container maxWidth="md">
        <Typography variant="h3">Projects</Typography>
        <div className="project-list">
          <Grid container spacing={2}>
            {projects.length ? <Projects projects={projects} /> : null}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default ProjectList;

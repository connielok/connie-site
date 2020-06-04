import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import projectimg from './projectimg.png';
import Projects from './Projects';

const projectsArr = [
  {
    id: 1,
    title: 'Grace Shopper',
    image: projectimg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    title: 'Stackathon',
    image: projectimg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    title: 'Capstone',
    image: projectimg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

class ProjectList extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: projectsArr,
      selectedProject: projectsArr[0],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="project-list">
        <Container maxWidth="md">
          <Typography variant="h3">Projects</Typography>
          <div className="projects">
            <Grid container spacing={2}>
              {this.state.projects.length ? (
                <Projects projects={this.state.projects} />
              ) : null}
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

export default ProjectList;

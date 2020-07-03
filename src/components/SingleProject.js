import React, { useState } from 'react';
import { Typography, Container } from '@material-ui/core';
// import axios from 'axios';
import projectsArr from '../projects';

const SingleProject = (props) => {
  const [project] = useState(projectsArr[props.match.params.id - 1]);
  // useEffect(() => {
  //   const fetchSingleProject = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `/api/projects/${props.match.params.id}`
  //       );
  //       setProject(data);
  //     } catch (error) {
  //       console.log('error fetching single project on front end!');
  //     }
  //   };
  //   fetchSingleProject();
  // }, [props.match.params.id]);

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

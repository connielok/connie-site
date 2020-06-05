import React, { useState, useEffect } from 'react';
import { Typography, Container } from '@material-ui/core';
import axios from 'axios';

const SingleProject = (props) => {
  const [project, setProject] = useState('');

  useEffect(() => {
    const fetchSingleProject = async () => {
      try {
        const { data } = await axios.get(
          `/api/projects/${props.match.params.id}`
        );
        setProject(data);
      } catch (error) {
        console.log('error fetching single project on front end!');
      }
    };
    fetchSingleProject();
  }, [props.match.params.id]);

  return (
    <div className="project">
      <Container maxWidth="md">
        <Typography variant="h3">{project.title}</Typography>
        <img alt="project" src={`${project.image}`} />
        <Typography variant="body2">{project.description}</Typography>
      </Container>
    </div>
  );
};

export default SingleProject;

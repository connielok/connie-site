import React from 'react';
// import { Link } from 'react-router-dom';
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Link,
} from '@material-ui/core';

const Projects = (props) => {
  const projects = props.projects;
  return projects.map((project) => {
    return (
      <Grid key={project.id} item xs={12} sm={6} lg={6} xl={6}>
        <Card variant="outlined">
          <CardMedia
            image={project.image}
            title="project-image"
            style={{ height: '25rem' }}
            component="img"
          />
          <CardContent>
            <Typography variant="h5">{project.title}</Typography>
            <Typography variant="body2">{project.shortDesc}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button color="primary">
              <Link
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </Link>
            </Button>
            <Button color="primary">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });
};

export default Projects;

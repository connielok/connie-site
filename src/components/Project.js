import React from 'react';
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
import projectsArr from '../projects';

const Projects = (props) => {
  return projectsArr.map((project) => {
    return (
      <Grid key={project.id} item xs={12} sm={6} lg={4} xl={4}>
        <Card variant="outlined" style={{ height: '100%' }}>
          <CardMedia
            image={project.image}
            title="project-image"
            style={{
              height: '20rem',
              minWidth: '15rem',
            }}
            component="img"
          />
          <CardContent>
            <Typography variant="h5">{project.title}</Typography>
            <Typography variant="body2">{project.shortDesc}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button color="primary">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </Button>
            <Button color="primary">
              <Link
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });
};

export default Projects;

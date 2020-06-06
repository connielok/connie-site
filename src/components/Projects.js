import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
} from '@material-ui/core';

const Projects = (props) => {
  const projects = props.projects;
  return projects.map((project) => {
    return (
      <Grid key={project.id} item xs={12} sm={6} lg={4} xl={3}>
        <Card>
          <CardMedia
            image={project.image}
            title="project-image"
            style={{ height: 200 }}
            component="img"
          />
          <CardContent>
            <Typography variant="h5">{project.title}</Typography>
            <Typography variant="body2">{project.shortDesc}</Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small" color="primary">
              Share
            </Button> */}
            <Button
              size="small"
              color="primary"
              component={Link}
              to={`/projects/${project.id}`}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });
};

export default Projects;

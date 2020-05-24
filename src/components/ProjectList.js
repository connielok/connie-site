import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from '@material-ui/core';
import projectimg from './projectimg.png';

const ProjectList = () => {
  return (
    <div className="project-list">
      <Container maxWidth="md">
        <Typography variant="h3">Projects</Typography>
        <div className="projects">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <Card>
                <CardMedia
                  image={projectimg}
                  title="project-image"
                  style={{ height: 200 }}
                  component="img"
                />
                <CardContent>
                  <Typography variant="h5">Project Name</Typography>
                  <Typography variant="body2">Project Details</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <Card>
                <CardMedia
                  image={projectimg}
                  title="project-image"
                  style={{ height: 200 }}
                  component="img"
                />
                <CardContent>
                  <Typography variant="h5">Project Name</Typography>
                  <Typography variant="body2">Project Details</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <Card>
                <CardMedia
                  image={projectimg}
                  title="project-image"
                  style={{ height: 200 }}
                  component="img"
                />
                <CardContent>
                  <Typography variant="h5">Project Name</Typography>
                  <Typography variant="body2">Project Details</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          {/* <div className="project-group">
            <h4>Project 1</h4>
            <div>
              <img src="" alt="project pic" />
            </div>
            <p>blurb about project</p>
          </div>
          <div className="project-group">
            <h4>Project 2</h4>
            <div>
              <img src="" alt="project pic" />
            </div>
            <p>blurb about project</p>
          </div>
          <div className="project-group">
            <h4>Project 3</h4>
            <div>
              <img src="" alt="project pic" />
            </div>
            <p>blurb about project</p>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default ProjectList;

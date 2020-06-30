import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const About = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h3">Hi, I'm Connie.</Typography>
        <div className="about">
          <Typography variant="body1">
            I'm a software engineer based in NYC.
          </Typography>
          <Typography variant="body1">
            I love coding like I love puzzles - it may take a while to to figure
            out the patterns, but it's so satisfying when all the pieces finally
            fit together. I worked in the MEP/construction industry as an
            electrical engineer for 4 years before deciding to make a switch to
            the software industry.
          </Typography>
          <Typography>Click here for my resume.</Typography>
          <Typography variant="body1">
            These are some of the technologies I've been working with recently:
          </Typography>
          <List className="tech" dense disablePadding>
            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="React" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Redux" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Node.js" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Express" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Sequelize" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Material UI" />
            </ListItem>
          </List>
        </div>
      </Container>
    </div>
  );
};

export default About;

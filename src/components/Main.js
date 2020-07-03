import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';
import Resume from './Resume';
import Contact from './Contact';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    'html, body, #root': {
      height: '100%',
    },
  },
  main: {
    minHeight: '85vh',
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <div id="main" className={classes.main}>
      <Switch>
        <Route path="/about" component={About} />
        {/* <Route path="/projects/:id" component={SingleProject} /> */}
        <Route path="/projects" component={ProjectList} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
        {/* <Route component={PageNotFound} /> */}
        {/* 404 page routing does not work!! */}
      </Switch>
    </div>
  );
};

export default Main;

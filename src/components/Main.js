import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';
import Contact from './Contact';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
        <Route path="/projects" component={ProjectList} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

export default Main;

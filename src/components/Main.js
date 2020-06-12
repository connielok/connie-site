import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
// import Nav from './Nav';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';
import SingleProject from './SingleProject';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

const Main = () => {
  return (
    <div>
      <Header />
      {/* <Nav useWidth={useWidth} /> */}
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects/:id" component={SingleProject} />
        <Route path="/projects" component={ProjectList} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
        {/* <Route component={PageNotFound} /> */}
        {/* 404 page routing does not work!! */}
      </Switch>
      <Footer />
    </div>
  );
};

export default Main;

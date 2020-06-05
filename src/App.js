import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/ProjectList';
import SingleProject from './components/SingleProject';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import PageNotFound from './components/PageNotFound';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

function App() {
  return (
    <ScopedCssBaseline>
      <div>
        <Router>
          <Header />
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
        </Router>
      </div>
    </ScopedCssBaseline>
  );
}

export default App;

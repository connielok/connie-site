import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/ProjectList';
import SingleProject from './components/SingleProject';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import PageNotFound from './components/PageNotFound';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  ThemeProvider,
  useTheme,
  createMuiTheme,
} from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: grey[50],
    },
  },
});

function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Header />
          <Nav useWidth={useWidth} />
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
    </ThemeProvider>
  );
};

export default App;

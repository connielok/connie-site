import React, { useEffect, useState } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import PageNotFound from './components/PageNotFound';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    const callBackendAPI = async () => {
      const { data } = await axios.get('/express');
      setData(data);
    };
    callBackendAPI();
  }, []);

  return (
    <ScopedCssBaseline>
      <div>
        <div>{data}</div>
        <Router>
          <Header />
          <Switch>
            <Route path="/about" component={About} />
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

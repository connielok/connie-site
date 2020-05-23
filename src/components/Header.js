import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
      <h1 className="header">connie lok</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const Nav = (props) => {
  const [value, setValue] = useState(0);
  const width = props.useWidth();

  const handleNavChange = (e, value) => {
    setValue(value);
    return value;
  };

  return (
    <AppBar position="static" className="nav">
      <Tabs
        onChange={handleNavChange}
        value={`${value}`}
        indicatorColor="secondary"
        textColor="secondary"
        variant={width === 'xs' || width === 's' ? 'scrollable' : null}
        centered={width !== 'xs'}
      >
        <Tab label="Home" component={Link} to={'/'} value="0" />
        <Tab label="About" component={Link} to={'/about'} value="1" />
        <Tab label="Projects" component={Link} to={'/projects'} value="2" />
        <Tab label="Resume" component={Link} to={'/resume'} value="3" />
        <Tab label="Contact" component={Link} to={'/contact'} value="4" />
      </Tabs>
    </AppBar>
  );
};

export default Nav;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Tabs,
  Tab,
  Switch,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';

const Nav = (props) => {
  const [value, setValue] = useState(0);
  // const width = useWidth();

  const handleNavChange = (e, value) => {
    setValue(value);
    return value;
  };

  return (
    <AppBar position="static" className="nav">
      <Typography
        variant="h3"
        color="secondary"
        style={{ paddingLeft: '1rem' }}
      >
        CL
      </Typography>
      <div style={{ display: 'flex' }}>
        <Tabs
          onChange={handleNavChange}
          value={`${value}`}
          indicatorColor="secondary"
          textColor="secondary"
          // variant={width === 'xs' || width === 's' ? 'scrollable' : null}
          variant="scrollable"
        >
          <Tab label="Home" component={Link} to={'/'} value="0" />
          <Tab label="About" component={Link} to={'/about'} value="1" />
          <Tab label="Projects" component={Link} to={'/projects'} value="2" />
          <Tab label="Resume" component={Link} to={'/resume'} value="3" />
          <Tab label="Contact" component={Link} to={'/contact'} value="4" />
        </Tabs>
        <FormControlLabel
          control={<Switch onClick={props.toggleTheme} size="small" />}
          label="Dark Mode"
          labelPlacement="top"
        />
      </div>
    </AppBar>
  );
};

// function useWidth() {
//   const theme = useTheme();
//   const keys = [...theme.breakpoints.keys].reverse();
//   return (
//     keys.reduce((output, key) => {
//       // eslint-disable-next-line react-hooks/rules-of-hooks
//       const matches = useMediaQuery(theme.breakpoints.up(key));
//       return !output && matches ? key : output;
//     }, null) || 'xs'
//   );
// }

export default Nav;

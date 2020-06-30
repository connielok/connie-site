import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Tabs,
  Tab,
  Switch,
  FormControlLabel,
  Toolbar,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // color:
    //   theme.type === 'light'
    //     ? theme.palette.primary.main
    //     : theme.palette.primary.dark,
  },
  tab: {
    minWidth: 90,
    fontSize: 'large',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'small',
    },
  },
  nav: {
    justifyContent: 'flex-end',
  },
  toggle: {
    marginLeft: theme.spacing(2),
  },
}));

const Nav = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const width = useWidth();

  const handleNavChange = (e, value) => {
    setValue(value);
    return value;
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.nav}>
        <Tabs
          onChange={handleNavChange}
          value={`${value}`}
          variant={width === 'xs' || width === 's' ? 'scrollable' : null}
        >
          <Tab
            label={<HomeIcon />}
            component={Link}
            to={'/'}
            value="0"
            className={classes.tab}
          />
          <Tab
            label="About"
            component={Link}
            to={'/about'}
            value="1"
            className={classes.tab}
          />
          <Tab
            label="Projects"
            component={Link}
            to={'/projects'}
            value="2"
            className={classes.tab}
          />
          {/* <Tab
            label="Resume"
            component={Link}
            to={'/resume'}
            value="3"
            className={classes.tab}
          /> */}
          <Tab
            label="Contact"
            component={Link}
            to={'/contact'}
            value="3"
            className={classes.tab}
          />
          <FormControlLabel
            control={<Switch onClick={props.toggleTheme} size="small" />}
            className={classes.toggle}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

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

export default Nav;

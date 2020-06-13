import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Tabs,
  Tab,
  Switch,
  FormControlLabel,
  Typography,
  Toolbar,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tab: {
    minWidth: 100,
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  toggle: {
    marginLeft: theme.spacing(2),
  },
}));

const Nav = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const width = useWidth();

  const handleNavChange = (e, value) => {
    setValue(value);
    return value;
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h4" color="secondary" className={classes.title}>
          CL
        </Typography>
        <Tabs
          onChange={handleNavChange}
          value={`${value}`}
          indicatorColor="secondary"
          textColor="secondary"
          variant={width === 'xs' || width === 's' ? 'scrollable' : null}
        >
          <Tab
            label="Home"
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
          <Tab
            label="Resume"
            component={Link}
            to={'/resume'}
            value="3"
            className={classes.tab}
          />
          <Tab
            label="Contact"
            component={Link}
            to={'/contact'}
            value="4"
            className={classes.tab}
          />
        </Tabs>
        <FormControlLabel
          control={<Switch onClick={props.toggleTheme} size="small" />}
          className={classes.toggle}
        />
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

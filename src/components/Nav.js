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
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  tabspanel: {
    display: 'flex',
  },
  tab: {
    [theme.breakpoints.up('sm')]: {
      minWidth: 110,
    },
    minWidth: 68,
    fontSize: 'large',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'small',
    },
    '&:hover': {
      color: '#fafafa',
    },
    flexGrow: 1,
    flexBasis: '1rem',
    flexShrink: '1rem',
    padding: '0',
  },
  home: {
    minWidth: 50,
    '&:hover': {
      color: '#fafafa',
    },
    flexGrow: 1,
    flexBasis: '1rem',
    flexShrink: '1rem',
    padding: '0',
  },
  nav: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  toggle: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
    },
    marginLeft: '.3rem',
  },
}));

const Nav = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  // const width = useWidth();

  const handleNavChange = (e, value) => {
    setValue(value);
    return value;
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.nav} disableGutters={true}>
        <Tabs
          onChange={handleNavChange}
          value={`${value}`}
          // variant={width === 'xs' || width === 's' ? 'scrollable' : null}
          scrollButtons="auto"
          variant="scrollable"
        >
          <Tab
            style={{ paddingLeft: 0, paddingRight: 0 }}
            label={<HomeIcon />}
            component={Link}
            to={'/'}
            value="0"
            className={classes.home}
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
            label="Contact"
            component={Link}
            to={'/contact'}
            value="3"
            className={classes.tab}
          />
          <FormControlLabel
            control={
              <Switch
                onClick={props.toggleTheme}
                checkedIcon={
                  <img
                    src="https://img.icons8.com/color/48/000000/waxing-gibbous.png"
                    weight="20"
                    height="20"
                    alt=""
                  />
                }
                icon={
                  <img
                    src="https://img.icons8.com/emoji/48/000000/sun-emoji.png"
                    weight="20"
                    height="20"
                    alt=""
                  />
                }
              />
            }
            className={classes.toggle}
          />
        </Tabs>
      </Toolbar>
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

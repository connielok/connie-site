import React, { useState } from 'react';
import Main from './components/Main';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import themeObj from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, FormControlLabel } from '@material-ui/core';
import Nav from './components/Nav';
import { HashRouter as Router } from 'react-router-dom';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  const themeConfig = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={themeConfig}>
      <CssBaseline />
      <Router>
        <Nav />
        <FormControlLabel
          control={<Switch onClick={toggleTheme} size="small" />}
          label="Dark Mode"
          labelPlacement="top"
        />
        <Main />
      </Router>
    </MuiThemeProvider>
  );
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObj);
  const {
    palette: { type },
  } = theme;
  const toggleTheme = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light',
      },
    };
    setTheme(updatedTheme);
  };
  return [theme, toggleTheme];
};

export default App;

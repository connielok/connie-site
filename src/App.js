import React, { useState } from 'react';
import Main from './components/Main';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import themeObj from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { HashRouter as Router } from 'react-router-dom';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeConfig = createMuiTheme(theme);
  return (
    <MuiThemeProvider theme={themeConfig}>
      <div id="app">
        <CssBaseline />
        <Router>
          <Nav toggleTheme={toggleTheme} />
          <Main />
          <Footer />
        </Router>
      </div>
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
      overrides: {
        ...theme.overrides,
        MuiSvgIcon: {
          root: {
            color: theme.palette.type === 'light' ? '#fafafa' : '#000',
          },
        },
        MuiTab: {
          textColorInherit: {
            color: theme.palette.type === 'light' ? '#fafafa' : '#000',
          },
        },
        MuiAppBar: {
          colorPrimary: {
            backgroundColor:
              theme.palette.type === 'light' ? '#34588b' : '#7da8c7',
          },
        },
        MuiButton: {
          contained: {
            backgroundColor:
              theme.palette.type === 'light' ? '#34588b' : '#7da8c7',
          },
          label: {
            color: theme.palette.type === 'light' ? '#fafafa' : '#000',
          },
        },
      },
    };
    setTheme(updatedTheme);
  };
  return [theme, toggleTheme];
};

export default App;

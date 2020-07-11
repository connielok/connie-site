const theme = {
  palette: {
    type: 'light',
    primary: {
      main: '#7da8c7',
      dark: '#34588b',
      // light: '#ACC8DC',
    },
    secondary: {
      main: '#fafafa',
      // dark: '#fafafa',
      // light: '#000000',
    },
  },
  typography: {
    fontFamily: 'Lato,"Helvetica Neue",Helvetica,Arial,sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body, #root': {
          height: '100%',
        },
      },
    },
    MuiContainer: {
      root: {
        paddingTop: '3rem',
      },
    },
    MuiSvgIcon: {
      root: {
        color: '#000',
      },
    },
    MuiTab: {
      textColorInherit: {
        color: '#000',
        // '&:hover': {
        //   backgroundColor: 'purple',
        // },
      },
      // root: {
      //   padding: '6px 0px',
      // },
    },

    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#7da8c7',
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: '#7da8c7',
      },
      label: {
        color: '#000',
      },
    },
    MuiTypography: {
      h3: {
        paddingBottom: '1rem',
      },
      body1: {
        paddingBottom: '.5rem',
      },
      h5: {
        paddingBottom: '1rem',
      },
    },
    MuiButtonBase: {
      root: {
        paddingLeft: '0',
        paddingRight: '0',
      },
    },
  },
  // props: {
  // MuiTypography: {
  //   paragraph: true,
  // },
  // },
};

export default theme;

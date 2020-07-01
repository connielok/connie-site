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
  },
  props: {
    MuiTypography: {
      paragraph: 'true',
    },
    // MuiButton: {
    //   color: 'primary',
    // },
  },
};

export default theme;

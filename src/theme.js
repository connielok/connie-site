const theme = {
  palette: {
    type: 'light',
    primary: {
      main: '#7da8c7',
      // dark: '#2A4B62',
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
    // MuiTab: {
    //   wrapper: {
    //     fontSize: 'larger',
    //   },
    // },

    MuiTab: {
      textColorInherit: {
        color: '#000',
        // '&:hover': {
        //   backgroundColor: 'purple',
        // },
      },
    },
  },
  props: {
    MuiTypography: {
      paragraph: 'true',
    },
  },
};

export default theme;

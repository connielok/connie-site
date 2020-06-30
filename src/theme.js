const theme = {
  palette: {
    type: 'light',
    primary: {
      main: '#7da8c7',
      dark: '#00796B',
      light: '#B2DFDB',
    },
    secondary: {
      main: '#fafafa',
      dark: '#fafafa',
      light: '#000000',
    },
    divider: '#BDBDBD',
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
    // MuiTab: {
    //   wrapper: {
    //     fontSize: 'larger',
    //   },
    // },

    // MuiTab: {
    //   root: {
    //     color: 'white',
    //     '&:hover': {
    //       backgroundColor: 'purple',
    //     },
    //   },
    // },
  },
  props: {
    MuiTypography: {
      paragraph: 'true',
    },
    MuiSvgIcon: {
      htmlColor: '#000000',
    },
  },
};

export default theme;

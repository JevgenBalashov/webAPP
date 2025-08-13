import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Inter } from 'next/font/google';

// TODO: Import custom font variable
import { customFont } from '@/constants/fonts';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 375,
      md: 420,
      lg: 768,
      xl: 1240,
    },
  },
  palette: {
    // action: {
    //   active: '',
    //   disabled: '',
    //   disabledBackground: '',
    //   hover: '',
    //   selected: '',
    // },
    // background: {
    //   default: '',
    //   paper: '',
    // },
    // divider: '#',
    // primary: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // secondary: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // error: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // warning: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // info: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // success: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.40)',
      disabled: '',
    },
  },
  // spacing: 0,
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  // TODO: Add custom font variable
  customFont,
  components: {
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       background: '',
    //     },
    //   },
    // },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            color: 'inherit',
          },
        },
        address: { fontStyle: 'normal' },
        img: {
          height: 'auto',
          display: 'block',
        },
        ul: { margin: 0, padding: 0, listStyle: 'none' },
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;

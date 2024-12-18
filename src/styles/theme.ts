import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import type {} from '@mui/x-data-grid/themeAugmentation';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#101418',
    },
    secondary: {
      main: '#19857b',
    },
    divider: '#E5EAF2',
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {},
    MuiButton: {
      styleOverrides: {
        root: {
          height: 'fit-content',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          minWidth: '10rem',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        overlayWrapper: {
          height: '10rem',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.custom-select-label': {
            left: '-14px',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '&.custom-select-helperText': {
            marginLeft: 0,
          },
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;

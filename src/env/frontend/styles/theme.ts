import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#696969',
    },
    secondary: {
      main: '#ff6347',
    },
    error: {
      main: '#EA3D2F',
    },
    background: {
      default: '#FFF',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: '#F7F9FA',

          [`& .${outlinedInputClasses.notchedOutline}`]: {
            border: '0.1rem solid #222',
            borderRadius: '0.4rem',
          },
        },
        input: {
          minHeight: '40px',
          padding: '0 1.4rem',
          fontSize: '1.4rem',
          textAlign: 'left',
          color: '#828282',
          background: '#F7F9FA',
        },
      },
    },
  },
});

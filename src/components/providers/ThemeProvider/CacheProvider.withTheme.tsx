import { ThemeProvider } from '@mui/material/styles';

import { theme } from '~/styles/theme';

export const withTheme: TWithProvider = (Component) => {
  return <ThemeProvider theme={theme}>{Component}</ThemeProvider>;
};

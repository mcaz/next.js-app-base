import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { theme } from '@/styles/theme';
import { createContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

type TProps = PropsWithChildren<{}>;

export const StyleRegistryContext = createContext({});

StyleRegistryContext.displayName = 'StyleRegistryContext';

export function ThemeProvider({ children }: TProps) {
  return (
    <>
      <CssBaseline />
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </>
  );
}

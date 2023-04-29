import { ThemeProvider as Provider } from '@mui/material/styles';

import { theme } from '@/frontend/styles/theme';

export const hoc: THoc = (Component) => {
  return <Provider theme={theme}>{Component}</Provider>;
};

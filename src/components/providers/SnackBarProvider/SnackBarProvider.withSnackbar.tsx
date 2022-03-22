import { SnackbarProvider } from 'notistack';

export const withSnackbar: TWithProvider = (Component) => {
  return <SnackbarProvider maxSnack={3}>{Component}</SnackbarProvider>;
};

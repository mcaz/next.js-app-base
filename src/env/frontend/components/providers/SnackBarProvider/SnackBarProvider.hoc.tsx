import { SnackbarProvider as Provider } from 'notistack';

export const hoc: THoc = (Component) => {
  return <Provider maxSnack={3}>{Component}</Provider>;
};

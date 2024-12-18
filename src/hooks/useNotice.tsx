import { useSnackbar } from 'notistack';

export const useNotice = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const info = (message: string) => {
    enqueueSnackbar(message, { variant: 'info' });
    return true;
  };

  const alert = (message: string) => {
    enqueueSnackbar(message, { variant: 'error' });
    return false;
  };

  return {
    info,
    alert,
    closeSnackbar,
  };
};

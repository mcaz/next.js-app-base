import { useSnackbar } from 'notistack';

export const useNotice = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const enqueueNotice = (notice: string) => {
    enqueueSnackbar(notice);
  };

  const closeNotice = () => {
    closeSnackbar();
  };

  return {
    enqueueNotice,
    closeNotice,
  };
};

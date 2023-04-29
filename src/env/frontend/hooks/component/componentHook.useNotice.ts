import { useSnackbar } from 'notistack';

export const useNotice = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const enqueue = (notice: string) => {
    enqueueSnackbar(notice);
  };

  const close = () => {
    closeSnackbar();
  };

  return {
    enqueue,
    close,
  };
};

import { useNotice } from './useNotice';

export const useGlobal = () => {
  const notice = useNotice();

  return {
    notice,
    info: notice.info,
    alert: notice.alert,
  };
};

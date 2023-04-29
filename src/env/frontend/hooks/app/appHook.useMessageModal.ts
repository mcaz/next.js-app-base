import { M } from '@/molecules';

export const useMessageModal = () => {
  const messageModal = M.useMessageModal({
    open: false,
  });

  return {
    messageModal,
  };
};

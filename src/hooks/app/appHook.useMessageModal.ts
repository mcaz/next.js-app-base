import M from '~/components/molecules';

export const useMessageModal = () => {
  const messageModal = M.useMessageModal({
    open: false,
  });

  return {
    messageModal,
  };
};

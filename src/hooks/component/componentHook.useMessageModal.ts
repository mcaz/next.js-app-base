import { useContext } from 'react';

import { MessageModalProviderContext } from '~/components/providers';

export const useMessageModal = () => {
  const { messageModal } = useContext(MessageModalProviderContext);

  return {
    ...messageModal,
    messageModal,
  };
};

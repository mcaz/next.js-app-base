import { M } from '@/molecules';

import { Provider } from './MessageModalProvider';

export const hoc: THoc = (
  Component,
  messageModal: ReturnType<typeof M.useMessageModal>
) => {
  return (
    <Provider messageModal={messageModal}>
      {Component}
      <M.MessageModal {...messageModal} />
    </Provider>
  );
};

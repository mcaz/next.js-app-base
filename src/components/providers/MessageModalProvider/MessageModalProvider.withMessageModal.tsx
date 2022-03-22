import { MessageModalProvider } from './MessageModalProvider';
import M from '~/components/molecules';

export const withMessageModal: TWithProvider = (
  Component,
  messageModal: ReturnType<typeof M.useMessageModal>
) => {
  return (
    <MessageModalProvider messageModal={messageModal}>
      {Component}
      <M.MessageModal {...messageModal} />
    </MessageModalProvider>
  );
};

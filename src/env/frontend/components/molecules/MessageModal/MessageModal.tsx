import { Modal } from '@/molecules/__shared__';

import { TProps } from './MessageModal.types';

export const MessageModal: TFC<TProps> = ({ message, ...props }) => {
  return <Modal {...props}>{message}</Modal>;
};

export default MessageModal;

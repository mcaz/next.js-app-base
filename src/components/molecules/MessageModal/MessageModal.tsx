import { TProps } from './MessageModal.types';
import { Modal } from '~/components/molecules/__bases__';

export const MessageModal: TVFC<TProps> = ({ message, ...props }) => {
  return <Modal {...props}>{message}</Modal>;
};

export default MessageModal;

import { useModal } from './MessageModal.hook';

export type TProps = ReturnType<typeof useModal> & {
  message: string;
};

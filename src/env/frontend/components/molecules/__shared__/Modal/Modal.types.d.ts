import { ModalProps } from '@mui/material/Modal';

import { useModal } from './Modal.hook';

export type TProps = Omit<ModalProps, 'children'> &
  ReturnType<typeof useModal> & {
    children: TChildren;
  };

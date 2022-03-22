import { default as ModalBase } from '@mui/material/Modal';

import { s } from './Modal.styles';
import { TProps } from './Modal.types';
import { Button } from '~/components/atoms/__bases__';
import E from '~/components/elements';

export const Modal: TVFC<TProps> = ({ children, open, closeModal }) => {
  return (
    <ModalBase open={open} onClose={closeModal} classes={{ root: s.Modal }}>
      <>
        <E.Container
          components={{ Division: E.Division }}
          classes={{ Root: s.Inner, Division: s.Division }}
        >
          <>{children}</>
          <Button onClick={closeModal}>CLOSE</Button>
        </E.Container>
      </>
    </ModalBase>
  );
};

export default Modal;

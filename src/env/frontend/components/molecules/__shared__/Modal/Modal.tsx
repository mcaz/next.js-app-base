import { default as ModalBase } from '@mui/material/Modal';

import { s } from './Modal.styles';
import { TProps } from './Modal.types';
import { Button } from '@/components/atoms/__shared__';
import { E } from '@/electrons';

export const Modal: TFC<TProps> = ({ children, open, closeModal }) => {
  return (
    <ModalBase open={open} onClose={closeModal} classes={{ root: s.Modal }}>
      <>
        <E.Container
          component={E.Division}
          className={s.Inner}
          division={{ component: E.Division, className: s.Division }}
        >
          <>{children}</>
          <Button onClick={closeModal}>CLOSE</Button>
        </E.Container>
      </>
    </ModalBase>
  );
};

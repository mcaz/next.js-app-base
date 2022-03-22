import { useModal } from '~/components/molecules/__bases__';
import { useState } from '~/hooks/react';

export const useMessageModal = (ctx: { open: boolean }) => {
  const modal = useModal({ open: ctx.open });

  const [message, setMsg] = useState('');

  const openModal = (message: string) => {
    setMsg(message);
    modal.openModal();
  };

  return { ...modal, message, openModal };
};

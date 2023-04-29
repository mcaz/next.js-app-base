import { useState } from '@/hooks/react';

export const useModal = (ctx: { open: boolean }) => {
  const [open, setOpen] = useState(ctx.open);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return {
    open,
    openModal,
    closeModal,
  };
};

import { useAppStore, useUserStore } from '~/stores';

export const useStore = () => {
  const appStore = useAppStore();
  const userStore = useUserStore();

  return {
    appStore,
    userStore,
  };
};

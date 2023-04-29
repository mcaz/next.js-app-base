import { useAppStore, useUserStore } from '@/data/stores';

export const useStore = () => {
  const appStore = useAppStore();
  const userStore = useUserStore();

  return {
    appStore,
    userStore,
  };
};

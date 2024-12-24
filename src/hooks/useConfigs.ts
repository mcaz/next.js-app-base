import { configs } from '@/configs';

export const useConfigs = () => {
  return {
    configs,
    ...configs,
  };
};

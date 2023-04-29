import * as allConfig from '@/config';
import { config } from '@/config';

export const useConfig = () => {
  return {
    ...allConfig,
    config,
  };
};

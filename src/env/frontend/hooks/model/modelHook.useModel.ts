import * as models from '@/data/models';
import { request } from '@/libs/api';
import { voToDto, validateDto } from '@/libs/model';

export const useModel = () => {
  return {
    voToDto,
    validateDto,
    request,
    ...models,
  };
};

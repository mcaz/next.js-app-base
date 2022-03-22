import { vosToDtos, vosToDtosThunk, voToDto, validateDto } from '~/libs/model';
import * as models from '~/models';

export const useModel = () => {
  return {
    vosToDtosThunk,
    voToDto,
    vosToDtos,
    validateDto,
    ...models,
  };
};

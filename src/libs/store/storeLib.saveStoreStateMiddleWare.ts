import { save } from 'redux-localstorage-simple';

export const saveStoreStateMiddleWare = (
  namespace: string,
  debounce: number
) => {
  return save({ namespace, debounce });
};

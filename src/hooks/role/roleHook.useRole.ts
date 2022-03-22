import { canThunk } from '~/libs/role';
import { createAcls } from '~/role';

export const useRole = (account?: TNullable<TAccount>) => {
  const acls = createAcls(account);
  const can = canThunk(acls);

  return {
    can,
  };
};

import { createCan } from '@/libs/role';
import { createAcls } from '@/roles';

export const useRole = (account?: TNullable<TAccount>) => {
  const acls = createAcls(account);
  const can = createCan(acls);

  return {
    can,
  };
};

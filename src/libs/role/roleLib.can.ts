import { TSubject, TVerb } from '~/role';
import { Acls } from '~/role/role.acls';

export const canThunk = (acls: Acls) => {
  const can = <T extends TSubject>(verb: TVerb<T>, subject: T) => {
    try {
      return acls[subject as string][verb]();
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  return can;
};

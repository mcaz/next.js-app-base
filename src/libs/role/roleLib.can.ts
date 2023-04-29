import { TSubject, TVerb } from '@/roles';
import { Acls } from '@/roles/roles.acls';

export const createCan = (acls: Acls) => {
  const can = (verb: TVerb<TSubject>, subject: TSubject) => {
    try {
      return acls[subject][verb]();
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  return can;
};

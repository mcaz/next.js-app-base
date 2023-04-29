import { AclBase } from '@/libs/role';
import { RoleType } from '@/types/tableValue';

export class UserAcl extends AclBase {
  readAll() {
    return this?.account?.profile?.role === RoleType.MASTER;
  }
}

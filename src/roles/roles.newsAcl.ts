import { AclBase } from '@/libs/role';
import { RoleType } from '@/types/tableValue';

export class NewsAcl extends AclBase {
  update() {
    return this?.account?.profile?.role === RoleType.MASTER;
  }
  foo() {
    return true;
  }
}

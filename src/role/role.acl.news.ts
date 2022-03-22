import { AclBase } from '~/libs/role';
import { RoleType } from '~/types/tableValue';

export class NewsAcl extends AclBase {
  update() {
    return this.account ? this.account.profile.role === RoleType.MASTER : false;
  }
  foo() {
    return true;
  }
}

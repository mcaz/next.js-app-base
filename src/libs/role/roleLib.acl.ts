export class AclBase {
  protected account?: TNullable<TAccount> = null;

  constructor(account?: TNullable<TAccount>) {
    this.account = account;
  }

  create() {
    return false;
  }

  read() {
    return false;
  }

  update() {
    return false;
  }

  delete() {
    return false;
  }
}

export const createAcl = <T>(
  Acl: TClassConstructor<T>,
  account?: TNullable<TAccount>
) => {
  return new Acl(account);
};

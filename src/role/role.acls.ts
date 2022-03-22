import { createAcl } from '~/libs/role';
import { NewsAcl } from '~/role/role.acl.news';
import { UserAcl } from '~/role/role.acl.user';

export class Acls {
  news: NewsAcl;
  user: UserAcl;

  constructor(account?: TNullable<TAccount>) {
    this.news = createAcl(NewsAcl, account);
    this.user = createAcl(UserAcl, account);
  }
}

export const createAcls = (account?: TNullable<TAccount>) => {
  return new Acls(account);
};

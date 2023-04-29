import { createAcl } from '@/libs/role';
import { NewsAcl } from '@/roles/roles.newsAcl';
import { UserAcl } from '@/roles/roles.userAcl';

export class Acls {
  news: NewsAcl;
  user: UserAcl;

  constructor(account?: TNullable<TAccount>) {
    this.news = createAcl(NewsAcl, account);
    this.user = createAcl(UserAcl, account);
  }
}

/**
 * アクセスコントロールリストを返す
 *
 * @param account Account
 * @returns       アクセスコントロールリスト
 */
export const createAcls = (account?: TNullable<TAccount>) => {
  return new Acls(account);
};

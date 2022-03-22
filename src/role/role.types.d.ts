import { Acls } from '~/role/role.acls';

export type TSubject = keyof typeof Acls.prototype;
export type TVerb<T extends TSubject> = keyof typeof Acls.prototype[T];

import { Acls } from '@/roles/roles.acls';

export type TSubject = keyof typeof Acls.prototype;
export type TVerb<T extends TSubject> = keyof (typeof Acls.prototype)[T];

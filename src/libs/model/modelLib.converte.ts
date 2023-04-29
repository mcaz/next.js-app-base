import { plainToInstance, instanceToPlain } from 'class-transformer';

export const voToDto = <T extends object, U extends TClassConstructor<T>>(
  vo: T[],
  cls: U
): T[] => {
  const instance = plainToInstance(cls, vo);
  const plain = instanceToPlain<T>(instance);

  return plain as T[];
};

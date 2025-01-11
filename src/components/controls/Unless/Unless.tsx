import { TProps } from './Unless.module.types';

export function Unless({ condition, children }: TProps) {
  return <>{Boolean(!condition) && children}</>;
}

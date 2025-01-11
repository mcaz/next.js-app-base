import { useMemo } from '@/hooks';
import { TProps } from './ArrayFind.module.types';

export function ArrayFind<T>({ array, render, condition }: TProps<T>) {
  const item = useMemo(() => {
    const item = array?.find((item, index, array) => {
      return condition(item, { index, array });
    });

    return item;
  }, [array, condition]);

  if (!item) {
    return <></>;
  }

  return <>{render(item, { array: array || [] })}</>;
}

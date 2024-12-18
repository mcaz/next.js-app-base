import { Fragment } from '@/components/primitives';
import { useMemo, useRender } from '@/hooks';
import { TProps } from './ArrayFilter.module.types';

export function ArrayFilter<T>({ array, render, condition }: TProps<T>) {
  const { key } = useRender();

  const filteredArray = useMemo(() => {
    return array?.filter((item, index, array) =>
      condition(item, { index, array })
    );
  }, [array, condition]);

  return (
    <>
      {filteredArray?.map((item, index, array) => (
        <Fragment key={key.value}>{render(item, { index, array })}</Fragment>
      ))}
    </>
  );
}

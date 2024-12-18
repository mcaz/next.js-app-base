import { Fragment } from '@/components/primitives';
import { useMemo, useRender } from '@/hooks';
import { TProps } from './ArrayMap.module.types';

export function ArrayMap<T>({ array, render }: TProps<T>) {
  const { key } = useRender();

  const Component = useMemo(() => {
    return (
      <>
        {array?.map((item, index, array) => {
          return (
            <Fragment key={key.value}>
              {render(item, { index, array })}
            </Fragment>
          );
        })}
      </>
    );
  }, [array, render, key]);

  return <>{Component}</>;
}

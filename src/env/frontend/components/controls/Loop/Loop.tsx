import { Fragment, FC } from 'react';

import { useRender } from '@/hooks/react';
import { FilledArray } from '@/libs/array';

import { Props } from './LoopTypes';

export const Loop: FC<Props> = ({ children, count }) => {
  const { key } = useRender();

  return (
    <>
      {FilledArray(count).map((_, index) => {
        return <Fragment key={key.value}>{children(index)}</Fragment>;
      })}
    </>
  );
};

import { TProps } from './Break.types';
import { C } from '../../controls';
import { useRender } from '@/hooks/react';

export const Break: TFC<TProps> = ({ hide = false, len = 1, ...props }) => {
  const { key } = useRender();

  const length = Number(len);

  if (hide || !length || length < 1) {
    return <></>;
  }

  return (
    <C.Loop count={length}>{() => <br key={key.value} {...props} />}</C.Loop>
  );
};

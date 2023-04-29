import { TProps } from './Space.types';
import { C } from '../../controls';
import { useRender } from '@/hooks/react';

export const Space: TFC<TProps> = ({ type = 'nbsp', len = 1 }) => {
  const length = Number(len);

  const { key } = useRender();

  const Component = () => {
    switch (type) {
      case 'nbsp':
        return <>&nbsp;</>;
      case 'ensp':
        return <>&ensp;</>;
      case 'emsp':
        return <>&emsp;</>;
      case 'thinsp':
        return <>&thinsp;</>;
      default:
        return <>&nbsp;</>;
    }
  };

  if (!length || length < 1) {
    return <></>;
  }

  return <C.Loop count={length}>{() => <Component key={key.value} />}</C.Loop>;
};

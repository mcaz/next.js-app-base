import { TProps } from './Space.types';
import { useIterator } from '~/hooks/react';

export const Space: TVFC<TProps> = ({ type = 'nbsp', len = 1 }) => {
  const length = Number(len);

  if (!length || length < 1) {
    return <></>;
  }

  const { uidIterator, generateFilledArray } = useIterator();

  const Component = (() => {
    switch (type) {
      case 'nbsp':
        return () => <>&nbsp;</>;
      case 'ensp':
        return () => <>&ensp;</>;
      case 'emsp':
        return () => <>&emsp;</>;
      case 'thinsp':
        return () => <>&thinsp;</>;
      default:
        return () => <>&nbsp;</>;
    }
  })();

  return (
    <>
      {generateFilledArray(length).map(() => {
        return <Component key={uidIterator.next().value} />;
      })}
    </>
  );
};

export default Space;

import { TProps } from './Break.types';
import { useIterator } from '~/hooks/react';

export const Break: TVFC<TProps> = ({ hide = false, len = 1, ...props }) => {
  const length = Number(len);

  if (hide || !length || length < 1) {
    return <></>;
  }

  const { uidIterator, generateFilledArray } = useIterator();

  return (
    <>
      {generateFilledArray(length).map(() => {
        return <br key={uidIterator.next().value} {...props} />;
      })}
    </>
  );
};

export default Break;

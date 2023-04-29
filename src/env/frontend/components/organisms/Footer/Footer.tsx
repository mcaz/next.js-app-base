import { E } from '@/electrons';

import { s } from './Footer.styles';

export const Footer: TFC = () => {
  return (
    <E.Footer className={s.Footer}>
      <E.Division className={s.Inner}>Footer</E.Division>
    </E.Footer>
  );
};

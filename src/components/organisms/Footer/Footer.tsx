import { s } from './Footer.styles';
import E from '~/components/elements';

export const Footer: TVFC = () => {
  return (
    <E.Footer className={s.Footer}>
      <E.Division className={s.Inner}>Footer</E.Division>
    </E.Footer>
  );
};

export default Footer;

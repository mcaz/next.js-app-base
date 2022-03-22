import { s } from './Header.styles';
import { TProps } from './Header.types';
import A from '~/components/atoms';
import E from '~/components/elements';
import { pageConfig } from '~/config';
import { useStyles } from '~/hooks/react';

export const Header: TVFC<TProps> = ({ title }) => {
  const { c } = useStyles();

  return (
    <E.Header className={s.Header}>
      <E.Division className={s.Inner}>
        <E.Division className={c(s.Cell, s.Cell_title)}>
          <E.Heading weight={1}>
            <E.Anchor href={pageConfig.home.path}>
              <A.Button color="red">{title}</A.Button>
            </E.Anchor>
          </E.Heading>
        </E.Division>
        <E.Division className={c(s.Cell, s.Cell_button)}>
          <A.Button color="red">Icon</A.Button>
        </E.Division>
        <E.Division className={c(s.Cell, s.Cell_user)}>
          <A.Button color="red">Icon</A.Button>
        </E.Division>
      </E.Division>
    </E.Header>
  );
};

export default Header;

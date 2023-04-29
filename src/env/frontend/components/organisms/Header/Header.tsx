import { A } from '@/components/atoms';
import { E } from '@/electrons';
import { useRender } from '@/hooks/react';

import { s } from './Header.styles';
import { TProps } from './Header.types';

export const Header: TFC<TProps> = ({ title, titleLinkPath }) => {
  const { c } = useRender();

  return (
    <E.Header className={s.Header}>
      <E.Division className={s.Inner}>
        <E.Division className={c(s.Cell, s.Cell_title)}>
          <E.Heading weight={1}>
            <E.Anchor href={titleLinkPath}>
              <E.Button color="red">{title}</E.Button>
            </E.Anchor>
          </E.Heading>
        </E.Division>
        <E.Division className={c(s.Cell, s.Cell_user)}>
          <A.Button color="red">Icon</A.Button>
        </E.Division>
      </E.Division>
    </E.Header>
  );
};

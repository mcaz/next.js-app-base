import { C } from '@/controls';
import { E } from '@/electrons';
import { useInfo } from '@/hooks/pageLayout';
import { useRender } from '@/hooks/react';

import { LAYOUT_NAME } from './WithSidebarLayout.const';
import { s } from './WithSidebarLayout.styles';
import { TProps } from './WithSidebarLayout.types';

export const WithSidebarLayout: TFC<TProps> = ({
  children,
  components: { Header, Footer, Sidebar },
  classes,
}) => {
  useInfo({
    name: LAYOUT_NAME,
  });

  const { c } = useRender();

  return (
    <E.Container
      component={E.Division}
      className={c(s.WithSidebarLayout, classes?.Root)}
    >
      <C.If condition={Sidebar}>
        <E.Division
          className={c(s.Column, s.Column_menu, s.Column_menu_expand)}
        >
          {Sidebar}
        </E.Division>
      </C.If>

      <E.Division className={c(s.Column, s.Column_main)}>
        <C.If condition={Header}>
          <E.Division className={c(s.HeaderContainer)}>{Header}</E.Division>
        </C.If>

        <E.Main className={c(s.MainContainer, classes?.MainContainer)}>
          <E.Scroll
            className={c(s.MainContainer__Inner, classes?.MainContainer__Inner)}
          >
            <E.Container component={E.Division} className={s.Container}>
              {children}
            </E.Container>
          </E.Scroll>
        </E.Main>

        <C.If condition={Header}>
          <E.Division className={c(s.FooterContainer)}>{Footer}</E.Division>
        </C.If>
      </E.Division>
    </E.Container>
  );
};

import { C } from '@/controls';
import { E } from '@/electrons';
import { useInfo } from '@/hooks/pageLayout';
import { useMemo, useRender } from '@/hooks/react';

import { LAYOUT_NAME } from './OneColumnLayout.const';
import { s } from './OneColumnLayout.styles';
import { TProps } from './OneColumnLayout.types';

export const OneColumnLayout: TFC<TProps> = ({
  children,
  components: { Header, Footer },
  classes,
}) => {
  useInfo({ name: LAYOUT_NAME });

  const { c, style } = useRender();

  const existsHeader = useMemo(() => Boolean(Header), [Header]);
  const existsFooter = useMemo(() => Boolean(Footer), [Footer]);

  return (
    <E.Container
      component={E.Division}
      className={c(s.OneColumnLayout, classes?.Root)}
    >
      <C.If condition={existsHeader}>
        <E.Division className={c(s.HeaderContainer, classes?.HeaderContainer)}>
          {Header}
        </E.Division>
      </C.If>

      <E.Main
        className={c(
          s.MainContainer,
          style(s.MainContainer_nonHeader, !existsHeader),
          style(s.MainContainer_nonFooter, !existsFooter),
          classes?.MainContainer
        )}
      >
        <E.Division
          className={c(s.MainContainer__Inner, classes?.MainContainer__Inner)}
        >
          <E.Container component={E.Division} className={s.Container}>
            {children}
          </E.Container>
        </E.Division>
      </E.Main>

      <C.If condition={existsFooter}>
        <E.Division className={c(s.FooterContainer, classes?.FooterContainer)}>
          {Footer}
        </E.Division>
      </C.If>
    </E.Container>
  );
};

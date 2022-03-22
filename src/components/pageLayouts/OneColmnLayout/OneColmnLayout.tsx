import { LAYOUT_NAME } from './OneColmnLayout.const';
import { s } from './OneColmnLayout.styles';
import { TProps } from './OneColmnLayout.types';
import E from '~/components/elements';
import M from '~/components/molecules';
import { useInfo } from '~/hooks/pageLayout';
import { useMemo, useRender, useStyles } from '~/hooks/react';
import { useRouter } from '~/hooks/router';

export const OneColmnLayout: TVFC<TProps> = ({
  children,
  components: { Header, Footer },
  classes,
}) => {
  useInfo({ name: LAYOUT_NAME });

  const existsHeader = useMemo(() => Boolean(Header), [Header]);
  const existsFooter = useMemo(() => Boolean(Footer), [Footer]);

  const { tryRenderIfTrue } = useRender();
  const { c, tryStyleIfExists, tryStyleIfTrue } = useStyles();
  const { pages } = useRouter();

  return (
    <E.Container
      className={useMemo(
        () => c(s.OneColmnLayout, tryStyleIfExists(classes?.Root)),
        [classes?.Root]
      )}
    >
      {tryRenderIfTrue(
        existsHeader,

        <E.Division
          className={useMemo(
            () =>
              c(s.HeaderContainer, tryStyleIfExists(classes?.HeaderContainer)),
            [classes?.HeaderContainer]
          )}
        >
          {Header}
        </E.Division>
      )}

      <E.Main
        className={useMemo(
          () =>
            c(
              s.MainContainer,
              tryStyleIfTrue(s.MainContainer_nonHeader, !existsHeader),
              tryStyleIfTrue(s.MainContainer_nonFooter, !existsFooter),
              tryStyleIfExists(classes?.MainContainer)
            ),
          [existsHeader, existsFooter, classes?.MainContainer]
        )}
      >
        <E.Division
          className={useMemo(
            () =>
              c(
                s.MainContainer__Inner,
                tryStyleIfExists(classes?.MainContainer__Inner)
              ),
            [classes?.MainContainer__Inner]
          )}
        >
          <E.Container classes={{ Root: s.Container }}>
            <M.LinkButtonList
              items={Object.entries(pages).map(([, { path, meta }]) => {
                return { path, label: meta.title };
              })}
            />
            {children}
          </E.Container>
        </E.Division>
      </E.Main>

      {tryRenderIfTrue(
        existsFooter,

        <E.Division
          className={useMemo(
            () =>
              c(s.FooterContainer, tryStyleIfExists(classes?.FooterContainer)),
            [classes?.FooterContainer]
          )}
        >
          {Footer}
        </E.Division>
      )}
    </E.Container>
  );
};

export default OneColmnLayout;

import { s } from './ResourceTable.styles';
import { TProps } from './ResourceTable.types';
import E from '~/components/elements';
import { useRender, useStyles } from '~/hooks/react';

export const ResourceTable: TVFC<TProps> = ({
  children,
  components,
  classes,
}) => {
  const { tryRenderIfTrue } = useRender();
  const { c, tryStyleIfExists } = useStyles();

  return (
    <E.Container
      className={c(s.ResourceTable, tryStyleIfExists(classes?.Root))}
    >
      {tryRenderIfTrue(
        Boolean(components.Panel),

        <E.Container
          className={c(
            s.PanelContainer,
            tryStyleIfExists(classes?.PanelContainer)
          )}
        >
          {components.Panel}
        </E.Container>
      )}

      {tryRenderIfTrue(
        Boolean(components.Header),

        <E.Container
          className={c(
            s.HeaderContainer,
            tryStyleIfExists(classes?.HeaderContainer)
          )}
        >
          <E.Table className={c(s.Table)}>
            <E.TableHead>{components.Header}</E.TableHead>
          </E.Table>
        </E.Container>
      )}

      <E.Container
        components={{ Root: E.Scroll }}
        classes={{
          Root: c(s.BodyContainer, tryStyleIfExists(classes?.BodyContainer)),
        }}
      >
        <E.Table className={c(s.Table)}>
          <E.TableBody>{children}</E.TableBody>
        </E.Table>
      </E.Container>
    </E.Container>
  );
};

export default ResourceTable;

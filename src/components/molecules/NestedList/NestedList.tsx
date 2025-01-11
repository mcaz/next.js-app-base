import { Collapse } from '@/components/atoms';
import { C } from '@/components/controls';
import { Icons } from '@/components/icons';
import {
  Container,
  Fragment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@/components/primitives';
import { useRender, useStates } from '@/hooks';
import { useItemStyles } from './NestedList.module.styles';
import { TItemProps, TProps } from './NestedList.module.types';

export function NestedList({ items }: TProps) {
  return (
    <Container as={List}>
      <C.ArrayMap
        array={items}
        render={(item) => <NestedListItem {...item} />}
      />
    </Container>
  );
}

export function NestedListItem(item: TItemProps) {
  const { id, primary, icon, disabled, highlight } = item;
  const { states, setStates } = useStates({ open: false });
  const { c, styleIf } = useRender();
  const { s } = useItemStyles({ nest: item.nest || 0 + 1 });

  const hasChildren = 'children' in item;

  const handleClick = () => {
    if (hasChildren) {
      setStates({ open: !states.open });
    } else {
      item?.onClickItem(id);
    }
  };

  return (
    <Fragment>
      <ListItemButton
        onClick={handleClick}
        disabled={disabled}
        className={c(
          styleIf(s.Highlight, highlight),
          styleIf(s.Disabled, disabled)
        )}
      >
        <C.If condition={icon}>
          <ListItemIcon>{icon}</ListItemIcon>
        </C.If>

        <ListItemText primary={primary} />

        <C.Switch condition>
          <C.Switch.Case value={hasChildren && states.open}>
            <Icons.ExpandLess color="primary" />
          </C.Switch.Case>

          <C.Switch.Case value={hasChildren && !states.open}>
            <Icons.ExpandMore color="primary" />
          </C.Switch.Case>
        </C.Switch>
      </ListItemButton>

      <C.If condition={hasChildren}>
        <Collapse
          in={states.open}
          timeout="auto"
          unmountOnExit
          className={s.Collapse}
        >
          <NestedList items={item?.children as unknown as TItemProps[]} />
        </Collapse>
      </C.If>
    </Fragment>
  );
}

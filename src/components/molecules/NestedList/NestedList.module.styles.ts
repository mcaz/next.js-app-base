import { useMemo } from '@/hooks';
import { createStyles } from '@/libs';

export const useItemStyles = (props: { nest?: number }) => {
  const { nest = 0 } = props;

  const s = useMemo(
    () =>
      createStyles(({ theme }) => {
        return {
          Collapse: {
            paddingLeft: `${nest}rem`,
          },
          Disabled: {},
          Highlight: {
            fontWeight: 700,
            color: theme.palette.primary.main,
            borderRight: `0.25rem solid ${theme.palette.primary.main}`,
          },
        };
      }, 'NestedListItem'),
    [nest]
  );

  return {
    s,
  };
};

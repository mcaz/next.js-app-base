import { Button } from '@/components/atoms';
import { C } from '@/components/controls';
import { Box, Container, Span } from '@/components/primitives';
import { s } from './DataGridContainer.module.styles';
import { TProps } from './DataGridContainer.module.types';

export function DataGridContainer({
  children,
  title,
  isLoading,
  actionButtons,
  slots,
}: TProps) {
  return (
    <Container as={Box} component="dl" className={s.Root}>
      <Box component="dt" className={s.Head}>
        <Span className={s.Head__Title}>{title}</Span>

        <Box className={s.Head__Actions}>
          <C.If condition={slots?.select}>
            <Box className={s.Head__Select}>{slots?.select}</Box>
          </C.If>

          <C.ArrayMap
            array={actionButtons}
            render={({ label, ...props }) => {
              return (
                <Button
                  color="primary"
                  variant="contained"
                  className={s.Head__Button}
                  {...props}
                >
                  {label}
                </Button>
              );
            }}
          />
        </Box>
      </Box>
      <C.If condition={slots?.panel}>
        <Box component="dd" className={s.Panel}>
          {slots?.panel}
        </Box>
      </C.If>

      <Box component="dd" className={s.Body}>
        <C.Unless condition={isLoading}>{children}</C.Unless>
      </Box>
    </Container>
  );
}

import { TProps } from './Container.types';
import { Division, Iteration } from '~/components/elements/__bases__';
import { useStyles } from '~/hooks/react';

export const Container: TVFC<TProps> = ({
  children,
  components,
  classes,
  className,
  ...props
}) => {
  const { c } = useStyles();

  const RootComponent = components?.Root || Division;

  return (
    <RootComponent className={c(classes?.Root, className)} {...props}>
      {components?.Division ? (
        <Iteration
          component={components.Division}
          className={classes?.Division}
        >
          {children}
        </Iteration>
      ) : (
        <>{children}</>
      )}
    </RootComponent>
  );
};

export default Container;

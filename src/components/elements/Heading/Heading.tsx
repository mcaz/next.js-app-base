import { TProps, TWeightTag } from './Heading.types';
import { Span } from '~/components/elements/__bases__';
import { useStyles } from '~/hooks/react';

export const Heading: TVFC<TProps> = ({
  children,
  weight,
  className,
  classes,
  ...props
}) => {
  const { c, tryStyleIfExists } = useStyles();

  const Component = `${
    Number.isNaN(+weight) ? weight : `h${weight}`
  }` as TIntrinsicElementType<TWeightTag>;

  return (
    <Component
      className={c(className, tryStyleIfExists(classes?.Heading))}
      {...props}
    >
      <Span className={c(tryStyleIfExists(classes?.Heading__Inner))}>
        {children}
      </Span>
    </Component>
  );
};

export default Heading;

export type TProps = TIntrinsicElements['thead'] & {
  component?: TComponent;
  children?: TChildren;
};

type TComponent<T = TIntrinsicElementType> = T<'thead'> | T<unknown>;

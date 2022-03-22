export type TProps = TIntrinsicElements['td'] & {
  component?: TComponent;
  children?: TChildren;
};

type TComponent<T = TIntrinsicElementType> = T<'td'> | T<unknown>;

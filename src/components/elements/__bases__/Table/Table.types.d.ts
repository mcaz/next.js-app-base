export type TProps = TIntrinsicElements['table'] & {
  component?: TComponent;
  children?: TChildren;
};

type TComponent<T = TIntrinsicElementType> = T<'table'> | T<unknown>;

export type TProps = TIntrinsicElements['tr'] & {
  component?: TComponent;
  children?: TChildren;
};

type TComponent<T = TIntrinsicElementType> = T<'tr'> | T<unknown>;

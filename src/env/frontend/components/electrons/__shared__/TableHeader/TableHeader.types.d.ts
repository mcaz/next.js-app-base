export type TProps = TIntrinsicElements['th'] & {
  component?: TComponent;
  children?: TChildren;
};

type TComponent<T = TIntrinsicElementType> = T<'th'> | T<unknown>;

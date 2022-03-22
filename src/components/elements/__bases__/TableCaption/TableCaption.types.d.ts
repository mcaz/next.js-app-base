export type TProps = TIntrinsicElements['caption'] & {
  component?: TComponent;
  children?: TChildren;
};

type TComponent<T = TIntrinsicElementType> = T<'caption'> | T<unknown>;

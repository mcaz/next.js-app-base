export type TProps = TIntrinsicElements['tbody'] & {
  component?: TComponent;
  children?: TChildren;
};

type TComponent<T = TIntrinsicElementType> = T<'tbody'> | T<unknown>;

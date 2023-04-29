export type TProps<T> = {
  panel?: TNode;
  rows?: T[];
  cols: {
    label?: TNode | string;
    width?: number | string;
    classes?: TColClasses;
    render: (row: T) => TElement | string | number;
  }[];
  classes?: TClasses;
  className?: string;
};

export type TClasses = TPartialCSSClassNamesObject<
  'Root' | 'Caption' | 'Table' | 'Head' | 'Body' | 'Cell'
>;
export type TColClasses = TPartialCSSClassNamesObject<'Header' | 'Data'>;

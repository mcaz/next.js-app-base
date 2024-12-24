export type CaseProps<T> = {
  value: ((c: T) => boolean) | T;
  children: ReactNode;
};

export type DefaultProps = {
  children: ReactNode;
};

export type SwitchProps<T> = {
  condition: T;
  children: ReactElement | ReactElement<CaseProps<T> | DefaultProps>[];
};

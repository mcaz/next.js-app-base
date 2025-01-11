import { C } from '@/components/controls';
import { ComponentType, ElementType, useMemo } from 'react';
import { TComponentPropsWithType, TProps } from './Container.types';

export const Container = <
  T extends ComponentType<unknown> | ElementType,
  U extends ComponentType<unknown> | ElementType
>({
  children,
  ...props
}: TProps<T, U>): React.ReactElement => {
  const ContainerComponent: ElementType = props.as;
  const RepeatComponent: ElementType = props.division?.as;

  return (
    <ContainerComponent {...(props as TComponentPropsWithType<T>)}>
      <C.If condition={props.division} exclusive>
        <C.If.Then>
          <C.Repeater {...props.division} as={RepeatComponent}>
            {children}
          </C.Repeater>
        </C.If.Then>

        <C.If.Else>{children}</C.If.Else>
      </C.If>
    </ContainerComponent>
  );
};

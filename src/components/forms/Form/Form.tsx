import { TProps } from './Form.types';

export const Form = ({ children, ...props }: TProps) => (
  <form noValidate {...props}>
    {children}
  </form>
)

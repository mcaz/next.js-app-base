import { Props } from './If.types';

export const If: TFC<Props> = ({ condition, children }) => {
  return <>{Boolean(condition) && children}</>;
};

export default If;

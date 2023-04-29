import { Context } from './StateProvider.ctx';
import { TProvider } from './StateProvider.types';

export const Provider: TFC<TProvider> = ({ children, mounted }) => {
  return <Context.Provider value={{ mounted }}>{children}</Context.Provider>;
};

export default Provider;

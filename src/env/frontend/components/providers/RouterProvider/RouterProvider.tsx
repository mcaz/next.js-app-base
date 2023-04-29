import { Context } from './RouterProvider.ctx';
import { TProvider } from './RouterProvider.types';

export const Provider: TFC<TProvider> = ({ children, router }) => {
  return <Context.Provider value={{ router }}>{children}</Context.Provider>;
};

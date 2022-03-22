import { Context } from './RouterProvider.ctx';
import { TProvider } from './RouterProvider.types';

export const RouterProvider: TVFC<TProvider> = ({ children, router }) => {
  return <Context.Provider value={{ router }}>{children}</Context.Provider>;
};

export default RouterProvider;

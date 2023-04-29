import { Context } from './MessageModalProvider.ctx';
import { TProvider } from './MessageModalProvider.types';

export const Provider: TFC<TProvider> = ({ children, messageModal }) => {
  return (
    <Context.Provider value={{ messageModal }}>{children}</Context.Provider>
  );
};

import { Context } from './MessageModalProvider.ctx';
import { TProvider } from './MessageModalProvider.types';

export const MessageModalProvider: TVFC<TProvider> = ({
  children,
  messageModal,
}) => {
  return (
    <Context.Provider value={{ messageModal }}>{children}</Context.Provider>
  );
};

export default MessageModalProvider;

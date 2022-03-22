import { Provider } from 'react-redux';

import { store } from '~/stores';

export const withStore: TWithProvider = (Component) => {
  return <Provider store={store}>{Component}</Provider>;
};

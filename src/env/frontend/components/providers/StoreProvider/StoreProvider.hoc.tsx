import { Provider } from 'react-redux';

import { store } from '@/data/stores';

export const hoc: THoc = (Component) => {
  return <Provider store={store}>{Component}</Provider>;
};

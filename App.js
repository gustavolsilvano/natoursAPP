import React from 'react';
import Navigator from './navigator/Navigator';

import { LoadingProvider } from './src/context/LoadingContext';
import { UserProvider } from './src/context/UserContext';
import { MessageProvider } from './src/context/MessageContext';
import createStoreProvider from './src/context/createStoreProvider';

const StoreProvider = createStoreProvider([
  LoadingProvider,
  UserProvider,
  MessageProvider
]);

const App = () => {
  return (
    <StoreProvider>
      <Navigator />
    </StoreProvider>
  );
};

export default App;

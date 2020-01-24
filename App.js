import React from 'react';
import Navigator from './navigator/Navigator';

import { LoadingProvider } from './src/context/LoadingContext';
import { UserProvider } from './src/context/UserContext';
import { MessageProvider } from './src/context/MessageContext';
import { TourProvider } from './src/context/TourContext';
import { ReviewProvider } from './src/context/ReviewContext';
import createStoreProvider from './src/context/createStoreProvider';

const StoreProvider = createStoreProvider([
  LoadingProvider,
  UserProvider,
  MessageProvider,
  TourProvider,
  ReviewProvider
]);

const App = () => {
  return (
    <StoreProvider>
      <Navigator />
    </StoreProvider>
  );
};

export default App;

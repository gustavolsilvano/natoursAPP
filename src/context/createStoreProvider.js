import React from 'react';

const createStoreProvider = providers => ({ children }) =>
  providers
    .reverse()
    .reduce((tree, Provider) => <Provider>{tree}</Provider>, children);

export default createStoreProvider;

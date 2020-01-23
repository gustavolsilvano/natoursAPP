import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const LoadingContext = React.createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Carregando...');

  const handleLoading = (loading, message) => {
    setLoading(loading);
    setLoadingMessage(message);
  };
  return (
    <LoadingContext.Provider value={handleLoading}>
      <Spinner
        visible={loading}
        textContent={loadingMessage}
        textStyle={styles.loading}
      />
      {children}
    </LoadingContext.Provider>
  );
};

const styles = StyleSheet.create({
  loading: {
    color: '#FFF'
  }
});

export default LoadingContext;

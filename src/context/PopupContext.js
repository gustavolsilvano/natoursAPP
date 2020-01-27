import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PopupCard from '../components/PopupCard';

const PopupContext = React.createContext();

export const PopupProvider = ({ children }) => {
  const [comp, setComp] = useState(null);

  return (
    <PopupContext.Provider value={setComp}>
      <View style={styles.container}>
        {comp}
        {children}
      </View>
    </PopupContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PopupContext;

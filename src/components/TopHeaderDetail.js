import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import TourContext from '../context/TourContext';

import Button from './Button';

import { width, height, firstColor_major } from '../constant/constant';

const TopHeaderDetail = () => {
  // CONTEXT

  const { currentTour: tour } = useContext(TourContext);

  return (
    <View style={styles.container}>
      <Button style={styles.button} text="BOOK NOW!" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 2,
    left: width / 18
  },
  button: {
    backgroundColor: firstColor_major,
    height: height / 14
  }
});

export default TopHeaderDetail;

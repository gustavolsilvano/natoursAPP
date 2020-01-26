import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TourContext from '../context/TourContext';

import Button from './Button';

import {
  width,
  height,
  firstColor_major,
  textColor_2
} from '../constant/constant';

const TopHeaderDetail = () => {
  // CONTEXT

  const { currentTour: tour } = useContext(TourContext);

  const AlreadyBooked = () => {
    return (
      <View style={styles.containerBooked}>
        <Text style={styles.textBooked}>BOOKED!</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {tour.isBooked ? (
        <AlreadyBooked />
      ) : (
        <Button style={styles.button} text="BOOK NOW!" />
      )}
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
  },
  containerBooked: {
    flex: 1,
    width: width / 2.5,
    height: height / 14,
    left: width / 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: height / 14,
    backgroundColor: firstColor_major
  },
  textBooked: {
    padding: 2,
    fontSize: 14,
    color: textColor_2
  }
});

export default TopHeaderDetail;

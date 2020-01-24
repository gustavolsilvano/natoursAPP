import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  height,
  width,
  backgroundColor,
  firstColor,
  backgroundColor_2
} from '../../../../constant/constant';

import { LinearGradient } from 'expo-linear-gradient';

const TourCardPlaceHolder = () => {
  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.containerHeader}>
        <View style={styles.imageFilter} />
        <LinearGradient
          colors={['rgba(119,204,113,.8)', 'rgba(76,193,152,.6)']}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.containerText1}
        ></LinearGradient>
        <LinearGradient
          colors={['rgba(119,204,113,.8)', 'rgba(76,193,152,.6)']}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.containerText2}
        ></LinearGradient>
        <View style={styles.triangleCorner} />
      </View>

      {/* BODY */}

      <View style={styles.containerBodyCard_1}>
        <View style={styles.containerSubBody_1}></View>
        <View style={styles.containerSubBody_2}></View>

        <View style={styles.containerSubBody_1}></View>
        <View style={styles.containerSubBody_2}></View>
      </View>

      <View style={styles.containerBodyCard_2}>
        <View style={styles.containerSubBody_2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    width: width - 20
  },
  containerHeader: {
    flex: 3,
    flexDirection: 'column',
    alignContent: 'stretch',
    alignItems: 'stretch',
    zIndex: 3
  },
  containerBodyCard_1: {
    flex: 3,
    zIndex: 2,
    backgroundColor: 'white',
    padding: 10
  },
  containerText1: {
    position: 'absolute',
    zIndex: 4,
    right: 10,
    bottom: height / 10,
    width: width / 4,
    height: height / 16
  },
  containerText2: {
    position: 'absolute',
    zIndex: 4,
    right: 10,
    bottom: height / 20,
    width: width / 3,
    height: height / 16
  },
  containerBodyCard_2: {
    flex: 1,
    zIndex: 2,
    backgroundColor: 'white',
    padding: 10,
    backgroundColor: backgroundColor_2,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  containerSubBody_1: {
    width: width / 3,
    height: height / 20,
    backgroundColor: firstColor,
    marginTop: 10
  },
  containerSubBody_2: {
    width: width / 2,
    height: height / 20,
    backgroundColor: firstColor,
    marginTop: 10
  },
  triangleCorner: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: width - 20,
    borderBottomWidth: height / 11,
    borderLeftColor: 'transparent',
    borderBottomColor: backgroundColor,
    zIndex: 3
  },
  imageFilter: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: firstColor,
    opacity: 0.5,
    zIndex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
});

export default TourCardPlaceHolder;

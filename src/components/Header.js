import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { logo, width, height } from '../constant/constant';

export default left => {
  let leftOffset = -width / 20;
  if (left.left) leftOffset = left.left;
  return (
    <View style={[styles.container, { left: leftOffset }]}>
      <Image source={logo} style={styles.image} resizeMode={'contain'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    position: 'absolute',
    top: -height / 11,
    width
  },
  image: {
    width: 70,
    alignSelf: 'center'
  }
});

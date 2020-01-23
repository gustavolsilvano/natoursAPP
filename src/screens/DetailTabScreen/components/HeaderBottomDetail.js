import React from 'react';
import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { imageTourURL } from '../../../constant/constant';

import styles from './style';

const HeaderDetail = ({ tour }) => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.imageFilter} />
      <Image
        source={{ uri: `${imageTourURL}/${tour.imageCover}` }}
        style={styles.cover}
      />
      <LinearGradient
        colors={['rgba(119,204,113,.8)', 'rgba(76,193,152,.6)']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.containerText1}
      >
        <Text style={styles.floatingText}>{tour.firstName}</Text>
      </LinearGradient>
      <LinearGradient
        colors={['rgba(119,204,113,.8)', 'rgba(76,193,152,.6)']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.containerText2}
      >
        <Text style={styles.floatingText}>{tour.secondName}</Text>
      </LinearGradient>
      <View style={styles.triangleCorner} />
    </View>
  );
};

const BottomDetail = ({ tour }) => {
  return (
    <View style={styles.containerBottom}>
      <View style={styles.triangleCornerDown} />
      <Image
        style={styles.bottomImages}
        source={{ uri: `${imageTourURL}/${tour.images[0]}` }}
      />
      <Image
        style={styles.bottomImages}
        source={{ uri: `${imageTourURL}/${tour.images[1]}` }}
      />
    </View>
  );
};

export { HeaderDetail, BottomDetail };

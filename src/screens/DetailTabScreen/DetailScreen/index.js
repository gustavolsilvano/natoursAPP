import React, { useState, useContext } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './style';
import {
  width,
  firstColor,
  firstColor_minor
} from '../../../constant/constant';

import {
  QuickFacts,
  TourDescription,
  TourGuides
} from './components/components';

import TourContext from '../../../context/TourContext';

import { HeaderDetail, BottomDetail } from '../components/HeaderBottomDetail';

const DetailScreen = () => {
  const { currentTour: tour } = useContext(TourContext);

  const [bodyIndicator, setBodyIndicator] = useState({
    ind1: firstColor,
    ind2: firstColor_minor,
    ind3: firstColor_minor
  });
  const handleScroll = x => {
    if (x <= width / 4)
      setBodyIndicator({
        ind1: firstColor,
        ind2: firstColor_minor,
        ind3: firstColor_minor
      });
    if (x >= width / 4 && x < width * 1.2)
      setBodyIndicator({
        ind1: firstColor_minor,
        ind2: firstColor,
        ind3: firstColor_minor
      });
    if (x >= width * 1.2)
      setBodyIndicator({
        ind1: firstColor_minor,
        ind2: firstColor_minor,
        ind3: firstColor
      });
  };
  return (
    <View style={styles.container}>
      {/* HEADER */}

      <HeaderDetail tour={tour} />

      {/* BODY */}

      <View style={styles.containerBody}>
        <ScrollView
          onScroll={event => handleScroll(event.nativeEvent.contentOffset.x)}
          snapToInterval={width}
          decelerationRate={'fast'}
          disableIntervalMomentum={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.bodyScrollView}
        >
          <QuickFacts tour={tour} />
          <TourGuides tour={tour} />
          <TourDescription tour={tour} />
        </ScrollView>
        <View style={styles.indicator}>
          <View style={[styles.ind, { backgroundColor: bodyIndicator.ind1 }]} />
          <View style={[styles.ind, { backgroundColor: bodyIndicator.ind2 }]} />
          <View style={[styles.ind, { backgroundColor: bodyIndicator.ind3 }]} />
        </View>
      </View>

      {/* BOTTOM */}

      <BottomDetail tour={tour} />
    </View>
  );
};

export default DetailScreen;

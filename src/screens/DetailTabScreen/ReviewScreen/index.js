import React, { useState, useRef, useContext } from 'react';
import { View } from 'react-native';

import styles from './style';
import {
  width,
  firstColor,
  firstColor_minor
} from '../../../constant/constant';

import { HeaderDetail, BottomDetail } from '../components/HeaderBottomDetail';
import ReviewCard from './components/ReviewCard';
import { ScrollView } from 'react-native-gesture-handler';
import ReviewCardBlank from './components/ReviewCardBlank';
import TourContext from '../../../context/TourContext';
import ReviewContext from '../../../context/ReviewContext';

const ReviewScreen = () => {
  const { currentTour: tour } = useContext(TourContext);
  const { currentReviews: reviews } = useContext(ReviewContext);

  // FUNCTIONS

  const resetColor = () => {
    let arr = [];
    for (let i = 0; i < reviews.length; i++) {
      arr.push(firstColor_minor);
    }
    return arr;
  };

  // REF
  const currentIndex = useRef();

  // STATE
  const [indColor, setIndColor] = useState(() => {
    let arrColor = resetColor();
    arrColor[0] = firstColor;
    return arrColor;
  });

  const handleScroll = x => {
    const index = Math.round(x / width);
    if (currentIndex.current !== index) {
      currentIndex.current = index;
      let arrColor = resetColor();
      arrColor[index] = firstColor;
      setIndColor(arrColor);
    }
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
        >
          {reviews.length > 0 ? (
            reviews.map(el => <ReviewCard review={el} key={el._id} />)
          ) : (
            <ReviewCardBlank />
          )}
        </ScrollView>
        <View style={styles.indicator}>
          {reviews.map((el, ind) => {
            return (
              <View style={[styles.ind, { backgroundColor: indColor[ind] }]} />
            );
          })}
        </View>
      </View>

      {/* BOTTOM */}
      <BottomDetail tour={tour} />
    </View>
  );
};

ReviewScreen.navigationOptions = {
  header: null
};

export default ReviewScreen;

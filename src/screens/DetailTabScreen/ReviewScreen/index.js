import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import { width } from '../../../constant/constant';
import Header from '../../../components/Header';

import { HeaderDetail, BottomDetail } from '../components/HeaderBottomDetail';
import ReviewCard from './components/ReviewCard';
import { ScrollView } from 'react-native-gesture-handler';
import ReviewCardBlank from './components/ReviewCardBlank';

const ReviewScreen = ({ navigation }) => {
  const tour = navigation.getParam('tour');
  const reviews = navigation.getParam('reviews');

  console.log(tour);
  console.log({ reviews });
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <HeaderDetail tour={tour} />

      {/* BODY */}
      <ScrollView
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

      {/* BOTTOM */}
      <BottomDetail tour={tour} />
    </View>
  );
};

ReviewScreen.navigationOptions = {
  headerTitle: () => <Header left={-width / 5} />
};

export default ReviewScreen;

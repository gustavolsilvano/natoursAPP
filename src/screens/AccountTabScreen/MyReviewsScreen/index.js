import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './style';
import { textColor_2 } from '../../../constant/constant';

const MyReviewsScreeen = () => {
  return (
    <View>
      <Text>MyReviewsScreeen</Text>
    </View>
  );
};

MyReviewsScreeen.navigationOptions = {
  title: 'MY REVIEWS',
  tabBarIcon: () => (
    <Feather
      name="star"
      style={{ alignSelf: 'flex-end', fontSize: 16, color: textColor_2 }}
    />
  )
};

export default MyReviewsScreeen;

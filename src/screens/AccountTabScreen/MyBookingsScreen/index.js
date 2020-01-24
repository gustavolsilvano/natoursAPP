import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './style';
import { textColor_2 } from '../../../constant/constant';

const MyBookingsScreeen = () => {
  return (
    <View>
      <Text>MyBookingsScreeen</Text>
    </View>
  );
};

MyBookingsScreeen.navigationOptions = {
  title: 'MY BOOKINGS',
  tabBarIcon: () => (
    <Feather
      name="briefcase"
      style={{ alignSelf: 'flex-end', fontSize: 16, color: textColor_2 }}
    />
  )
};

export default MyBookingsScreeen;

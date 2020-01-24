import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './style';
import { textColor_2 } from '../../../constant/constant';

const MyBillingScreeen = () => {
  return (
    <View>
      <Text>MyBillingScreeen</Text>
    </View>
  );
};

MyBillingScreeen.navigationOptions = {
  title: 'BILLINGS',
  tabBarIcon: () => (
    <Feather
      name="credit-card"
      style={{ alignSelf: 'flex-end', fontSize: 16, color: textColor_2 }}
    />
  )
};

export default MyBillingScreeen;

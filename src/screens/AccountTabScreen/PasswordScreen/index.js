import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './style';
import { textColor_2 } from '../../../constant/constant';

const PasswordScreeen = () => {
  return (
    <View>
      <Text>PasswordScreeen</Text>
    </View>
  );
};

PasswordScreeen.navigationOptions = {
  tabBarIcon: () => (
    <Feather name="lock" style={{ alignSelf: 'flex-end', fontSize: 16, color: textColor_2 }} />
  )
};

export default PasswordScreeen;

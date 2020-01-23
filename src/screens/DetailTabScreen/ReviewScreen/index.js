import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import { width } from '../../../constant/constant';
import Header from '../../../components/Header';

const DetailScreen = ({ navigation }) => {
  return (
    <View>
      <Text>ReviewScreen</Text>
    </View>
  );
};

DetailScreen.navigationOptions = {
  headerTitle: () => <Header left={-width / 5} />
};

export default DetailScreen;

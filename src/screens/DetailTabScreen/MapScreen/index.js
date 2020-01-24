import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import { width } from '../../../constant/constant';
import Header from '../../../components/Header';
import TourContext from '../../../context/TourContext';

const DetailScreen = () => {
  const { currentTour: tour } = useContext(TourContext);
  return (
    <View>
      <Text>MapScreen</Text>
    </View>
  );
};

DetailScreen.navigationOptions = {
  headerTitle: () => <Header left={-width / 4} />
};

export default DetailScreen;

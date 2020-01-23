import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

const ReviewCardBlank = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBlank}>No review for this tour, yet...</Text>
    </View>
  );
};

export default ReviewCardBlank;

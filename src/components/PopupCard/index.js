import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../Button';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './style';
import { firstColor_minor, firstColor_major } from '../../constant/constant';

const PopupCard = ({ text, yesCallback, noCallback, closeCallback }) => {
  return (
    <View style={styles.overall}>
      <LinearGradient
        colors={[firstColor_major, firstColor_minor]}
        start={[0, 0]}
        end={[0, 1.4]}
        style={styles.container}
      >
        <TouchableOpacity
          style={styles.containerIconClose}
          onPress={closeCallback}
        >
          <Feather name="x" style={styles.iconClose} />
        </TouchableOpacity>
        <Text style={styles.title}>{text}</Text>
        <Button text="Yes" callBack={yesCallback} />
        <Button text="Not Now" style={styles.noButton} callBack={noCallback} />
      </LinearGradient>
    </View>
  );
};

export default PopupCard;

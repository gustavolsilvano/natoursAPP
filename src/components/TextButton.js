import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { textColor } from '../constant/constant';

const TextButton = ({ text, callBack, style }) => {
  return (
    <TouchableOpacity onPress={() => callBack()}>
      <Text style={[styles.text, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    color: textColor
  }
});

export default TextButton;

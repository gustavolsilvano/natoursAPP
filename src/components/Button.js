import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { textColor_2, firstColor } from '../constant/constant';

const Button = ({ text, callBack, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => callBack()}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: firstColor,
    borderRadius: 50,
    height: 50,
    alignSelf: 'center'
  },
  text: {
    padding: 2,
    fontSize: 14,
    color: textColor_2
  }
});

export default Button;

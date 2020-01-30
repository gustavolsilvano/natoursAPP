import React, { useEffect, useRef } from 'react';
import { Text, Animated, StyleSheet } from 'react-native';

const FloatingWarning = ({ show, text, effectEnded }) => {
  const delayTextLength = () => {
    let delay = 2000;
    if (text && text.length > 100) delay = 5000;
    return delay;
  };
  const delay = delayTextLength();
  const useFade = () => {
    const opacityMessage = useRef(new Animated.Value(0)).current;

    const changeOpacity = () => {
      Animated.sequence([
        Animated.timing(opacityMessage, { toValue: 1, duration: 500 }),
        Animated.timing(opacityMessage, {
          toValue: 0,
          duration: 1000,
          delay
        })
      ]).start(effectEnded);
    };

    useEffect(() => {
      setTimeout(() => changeOpacity(), 0);
    }, []);

    return opacityMessage;
  };

  return (
    <>
      {show ? (
        <Animated.View style={[styles.container, { opacity: useFade() }]}>
          <Text style={styles.text}>{text}</Text>
        </Animated.View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#D9DDDC',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 25,
    zIndex: 1000,
    position: 'absolute',
    bottom: 26
  },
  text: {
    fontSize: 14,
    color: 'black'
  }
});

export default FloatingWarning;

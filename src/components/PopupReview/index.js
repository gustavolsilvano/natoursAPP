import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native';
import Button from '../Button';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './style';
import {
  firstColor_minor,
  firstColor_major,
  height
} from '../../constant/constant';

const PopupReview = ({
  sendCallback,
  backCallback,
  closeCallback,
  deleteCallback,
  reviewIni,
  tourIni,
  rateIni
}) => {
  // CONST
  const DEFAULT_STAR_COLOR = [
    firstColor_minor,
    firstColor_minor,
    firstColor_minor,
    firstColor_minor,
    firstColor_minor
  ];

  // STATE
  const [starColor, setStarColor] = useState(DEFAULT_STAR_COLOR);
  const [rate, setRate] = useState(0);
  const [text, setText] = useState(reviewIni);

  // FUNCTION
  const handlePress = star => {
    switch (star) {
      case 1:
        if (rate === 1) {
          setRate(0);
          setStarColor(DEFAULT_STAR_COLOR);
          return;
        }

        setStarColor([
          firstColor_major,
          firstColor_minor,
          firstColor_minor,
          firstColor_minor,
          firstColor_minor
        ]);
        setRate(1);
        break;
      case 2:
        if (rate === 2) {
          setRate(0);
          setStarColor(DEFAULT_STAR_COLOR);
          return;
        }
        setStarColor([
          firstColor_major,
          firstColor_major,
          firstColor_minor,
          firstColor_minor,
          firstColor_minor
        ]);
        setRate(2);
        break;
      case 3:
        if (rate === 3) {
          setRate(0);
          setStarColor(DEFAULT_STAR_COLOR);
          return;
        }
        setStarColor([
          firstColor_major,
          firstColor_major,
          firstColor_major,
          firstColor_minor,
          firstColor_minor
        ]);
        setRate(3);
        break;
      case 4:
        if (rate === 4) {
          setRate(0);
          setStarColor(DEFAULT_STAR_COLOR);
          return;
        }
        setStarColor([
          firstColor_major,
          firstColor_major,
          firstColor_major,
          firstColor_major,
          firstColor_minor
        ]);
        setRate(4);
        break;
      case 5:
        if (rate === 5) {
          setRate(0);
          setStarColor(DEFAULT_STAR_COLOR);
          return;
        }
        setStarColor([
          firstColor_major,
          firstColor_major,
          firstColor_major,
          firstColor_major,
          firstColor_major
        ]);
        setRate(5);
        break;

      default:
        break;
    }
  };

  // EFFECT
  useEffect(() => {
    handlePress(Math.round(rateIni));
  }, []);
  return (
    <SafeAreaView style={styles.overall}>
      <KeyboardAvoidingView
        contentContainerStyle={{ flex: 1 }}
        enabled={true}
        keyboardVerticalOffset={-height / 4}
        behavior={'position'}
        style={{ flex: 1 }}
      >
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
          {deleteCallback ? (
            <TouchableOpacity
              style={styles.containerIconDelete}
              onPress={deleteCallback}
            >
              <Feather name="trash" style={styles.iconDelete} />
            </TouchableOpacity>
          ) : null}
          {tourIni ? (
            <Text style={styles.title}>{tourIni.name}</Text>
          ) : (
            <Text style={styles.title}>Review the tour below</Text>
          )}

          <View style={styles.containerBody}>
            <View style={styles.containerText}>
              <TextInput
                style={styles.inputText}
                value={text}
                onChangeText={val => setText(val)}
                placeholder="Write your review here..."
                multiline={true}
              />
            </View>

            <View style={styles.containerRating}>
              <TouchableOpacity onPress={() => handlePress(1)}>
                <Feather
                  name="star"
                  style={[styles.rating, { color: starColor[0] }]}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePress(2)}>
                <Feather
                  name="star"
                  style={[styles.rating, { color: starColor[1] }]}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePress(3)}>
                <Feather
                  name="star"
                  style={[styles.rating, { color: starColor[2] }]}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePress(4)}>
                <Feather
                  name="star"
                  style={[styles.rating, { color: starColor[3] }]}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePress(5)}>
                <Feather
                  name="star"
                  style={[styles.rating, { color: starColor[4] }]}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.containerButton}>
              <Button
                text="Send"
                callBack={() => sendCallback(text, rate)}
                style={styles.firstButton}
              />
              <Button
                text="Back"
                style={styles.secondButton}
                callBack={backCallback}
              />
            </View>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PopupReview;

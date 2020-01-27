import React from 'react';
import { View, Text, Image } from 'react-native';
import { imageUserURL } from '../../constant/constant';
import { Feather } from '@expo/vector-icons';
import { cardTextColor, strongColor } from '../../constant/constant';

import styles from './style';

const ReviewCard = ({ review, isMyReviewScreen }) => {
  let ratingsColor;
  if (review.rating < 1) {
    ratingsColor = {
      r1: cardTextColor,
      r2: cardTextColor,
      r3: cardTextColor,
      r4: cardTextColor,
      r5: cardTextColor
    };
  }
  if (review.rating >= 1 && review.rating < 2) {
    ratingsColor = {
      r1: strongColor,
      r2: cardTextColor,
      r3: cardTextColor,
      r4: cardTextColor,
      r5: cardTextColor
    };
  }
  if (review.rating >= 2 && review.rating < 3) {
    ratingsColor = {
      r1: strongColor,
      r2: strongColor,
      r3: cardTextColor,
      r4: cardTextColor,
      r5: cardTextColor
    };
  }
  if (review.rating >= 3 && review.rating < 4) {
    ratingsColor = {
      r1: strongColor,
      r2: strongColor,
      r3: strongColor,
      r4: cardTextColor,
      r5: cardTextColor
    };
  }
  if (review.rating >= 4 && review.rating < 5) {
    ratingsColor = {
      r1: strongColor,
      r2: strongColor,
      r3: strongColor,
      r4: strongColor,
      r5: cardTextColor
    };
  }
  if (review.rating >= 5) {
    ratingsColor = {
      r1: strongColor,
      r2: strongColor,
      r3: strongColor,
      r4: strongColor,
      r5: strongColor
    };
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerUser}>
        <Image
          source={{ uri: `${imageUserURL}/${review.user.photo}` }}
          style={styles.userPhoto}
        />
        <View style={styles.containerUserTourName}>
          <Text style={styles.textUserName}>
            {review.user.name.toUpperCase()}
          </Text>
          {isMyReviewScreen && review.tour !== null ? (
            <Text style={styles.textTourName}>Tour: {review.tour.name}</Text>
          ) : null}
        </View>
      </View>
      <Text style={styles.textReview}>{review.review}</Text>
      <View style={styles.containerRating}>
        <Feather
          name="star"
          style={[styles.rating, { color: ratingsColor.r1 }]}
        />
        <Feather
          name="star"
          style={[styles.rating, { color: ratingsColor.r2 }]}
        />
        <Feather
          name="star"
          style={[styles.rating, { color: ratingsColor.r3 }]}
        />
        <Feather
          name="star"
          style={[styles.rating, { color: ratingsColor.r4 }]}
        />
        <Feather
          name="star"
          style={[styles.rating, { color: ratingsColor.r5 }]}
        />
      </View>
    </View>
  );
};

export default ReviewCard;

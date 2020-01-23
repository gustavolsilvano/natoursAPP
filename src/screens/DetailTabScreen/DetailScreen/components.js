import React from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { imageUserURL } from '../../../constant/constant';

import firstLetterUpper from '../../../functions/firstLetterUpper';

import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';

const QuickFacts = ({ tour }) => {
  return (
    <View style={styles.subContainerBody}>
      <Text style={styles.textTitles}>QUICK FACTS</Text>
      <View style={styles.containerIcon}>
        <Feather style={styles.icon} name="calendar" />
        <Text style={styles.textIcon}> NEXT DATE</Text>
        <Text style={styles.textIcon_2}>
          {' '}
          {tour.firstDateHandled.month} {tour.firstDateHandled.year}
        </Text>
      </View>
      <View style={styles.containerIcon}>
        <Feather style={styles.icon} name="trending-up" />
        <Text style={styles.textIcon}> DIFFICULTY</Text>
        <Text style={styles.textIcon_2}>
          {' '}
          {firstLetterUpper(tour.difficulty)}
        </Text>
      </View>
      <View style={styles.containerIcon}>
        <Feather style={styles.icon} name="user" />
        <Text style={styles.textIcon}> PARTICIPANTS</Text>
        <Text style={styles.textIcon_2}> {tour.maxGroupSize} People</Text>
      </View>
      <View style={styles.containerIcon}>
        <Feather style={styles.icon} name="star" />
        <Text style={styles.textIcon}> RATING</Text>
        <Text style={styles.textIcon_2}>
          {' '}
          {tour.ratingsAverage} / {tour.ratingsQuantity}
        </Text>
      </View>
    </View>
  );
};

const TourGuides = ({ tour }) => {
  const Guide = ({ guide }) => {
    return (
      <View style={styles.containerGuide}>
        <Image
          style={styles.guidePhoto}
          source={{ uri: `${imageUserURL}/${guide.photo}` }}
        />
        <Text style={styles.textIcon}>
          {' '}
          {guide.role
            .split('-')
            .join(' ')
            .toUpperCase()}
        </Text>
        <Text style={styles.textIcon_2}> {guide.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.subContainerBody}>
      <Text style={styles.textTitles}>YOUR TOUR GUIDES</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {tour.guides.map(el => {
          return <Guide guide={el} />;
        })}
      </ScrollView>
    </View>
  );
};

const TourDescription = ({ tour }) => {
  return (
    <View style={styles.subContainerBody}>
      <Text style={styles.textTitles}>
        ABOUT {tour.firstName} {tour.secondName} TOUR
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          {tour.description.split('\n').join('\n\n')}
        </Text>
      </ScrollView>
    </View>
  );
};

export { QuickFacts, TourGuides, TourDescription };

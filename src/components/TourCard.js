import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  height,
  width,
  backgroundColor,
  firstColor,
  cardTextColor,
  cardTextColor_2
} from '../constant/constant';
import Button from '../components/Button';

import {
  imageTourURL,
  textColor_2,
  backgroundColor_2
} from '../constant/constant';

import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import getFullMonth from '../functions/getFullMonth';

import LoadingContext from '../context/LoadingContext';
import MessageContext from '../context/MessageContext';
import TourContext from '../context/TourContext';
import ReviewContext from '../context/ReviewContext';

import server from '../api/server';

const TourCard = ({ tour, navigation }) => {
  // Adjusting tour informations
  const date = new Date(Date.parse(tour.startDates[0]));
  const year = date.getFullYear();
  const month = getFullMonth(date.getMonth());
  tour.firstDateHandled = { year, month };

  const splitName = tour.name.split(' ');
  const firstName = `${splitName[0]} ${splitName[1]}`.toUpperCase();
  const secondName = splitName
    .slice(2)
    .join(' ')
    .toUpperCase();
  tour.firstName = firstName;
  tour.secondName = secondName;

  // CONTEXT
  const handleLoading = useContext(LoadingContext);
  const handleWarning = useContext(MessageContext);
  const { setCurrentTour } = useContext(TourContext);
  const { setCurrentReviews } = useContext(ReviewContext);

  // FUNCTION
  const handleDetail = async () => {
    handleLoading(true, 'Loading...');
    try {
      const response = await server.get(`/api/v1/tours/${tour._id}/reviews`);
      setCurrentReviews(response.data.data.docs);
      setCurrentTour(tour);
      navigation.navigate('Detail');
      handleLoading(false, '');
    } catch (err) {
      console.log('Error when getting review', err.response || err);
      handleLoading(false, '');
      handleWarning(true, err.response.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.containerHeader}>
        <View style={styles.imageFilter} />
        <Image
          source={{ uri: `${imageTourURL}/${tour.imageCover}` }}
          style={styles.cover}
        />
        <LinearGradient
          colors={['rgba(119,204,113,.8)', 'rgba(76,193,152,.6)']}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.containerText1}
        >
          <Text style={styles.floatingText}>{tour.firstName}</Text>
        </LinearGradient>
        <LinearGradient
          colors={['rgba(119,204,113,.8)', 'rgba(76,193,152,.6)']}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.containerText2}
        >
          <Text style={styles.floatingText}>{tour.secondName}</Text>
        </LinearGradient>
        <View style={styles.triangleCorner} />
      </View>

      {/* BODY */}

      <View style={styles.containerBodyCard_1}>
        <Text style={styles.textDifficulty}>
          {tour.difficulty.toUpperCase()} {tour.duration}-DAY TOUR
        </Text>
        <Text style={styles.textSummary}>{tour.summary}</Text>
        <View style={styles.containerIcon}>
          <View style={styles.containerIconSub}>
            <View style={styles.containerOneIcon}>
              <Feather name="map-pin" style={styles.icon} />
              <Text style={styles.textIcon}>
                {' '}
                {tour.startLocation.description}
              </Text>
            </View>
            <View style={[styles.containerOneIcon, { marginTop: 20 }]}>
              <Feather name="flag" style={styles.icon} />
              <Text style={styles.textIcon}>
                {' '}
                {tour.locations.length} stops
              </Text>
            </View>
          </View>
          <View style={styles.containerIconSub}>
            <View style={styles.containerOneIcon}>
              <Feather name="calendar" style={styles.icon} />
              <Text style={styles.textIcon}>
                {' '}
                {month} {year}
              </Text>
            </View>
            <View style={[styles.containerOneIcon, { marginTop: 20 }]}>
              <Feather name="user" style={styles.icon} />
              <Text style={styles.textIcon}> {tour.maxGroupSize} people</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.containerBodyCard_2}>
        <View style={styles.containerSubBody_2}>
          <View style={styles.containerTextBody_2}>
            <Text style={styles.textBody_2}>${tour.price}</Text>
            <Text style={styles.textIcon}> per person</Text>
          </View>
          <View style={styles.containerTextBody_2}>
            <Text style={styles.textBody_2}>{tour.ratingsAverage}</Text>
            <Text style={styles.textIcon}>
              {' '}
              ratings ({tour.ratingsQuantity})
            </Text>
          </View>
        </View>
        <View style={styles.containerSubBody_2}>
          <Button
            style={styles.button}
            text="DETAILS"
            callBack={handleDetail}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    width: width - 20
  },
  containerHeader: {
    flex: 3,
    flexDirection: 'column',
    alignContent: 'stretch',
    alignItems: 'stretch',
    zIndex: 3
  },
  containerBodyCard_1: {
    flex: 3,
    zIndex: 2,
    backgroundColor: 'white',
    padding: 10
  },
  containerText1: {
    position: 'absolute',
    zIndex: 4,
    right: 10,
    bottom: height / 10
  },
  containerText2: {
    position: 'absolute',
    zIndex: 4,
    right: 10,
    bottom: height / 20
  },
  containerIcon: {
    flexDirection: 'row',
    marginTop: 20
  },
  containerIconSub: {
    flex: 1
  },
  containerOneIcon: {
    flexDirection: 'row'
  },
  containerBodyCard_2: {
    flex: 1,
    zIndex: 2,
    backgroundColor: 'white',
    padding: 10,
    backgroundColor: backgroundColor_2,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  containerTextBody_2: {
    flexDirection: 'row'
  },
  containerSubBody_2: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignContent: 'stretch',
    alignSelf: 'stretch'
  },
  triangleCorner: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: width - 20,
    borderBottomWidth: height / 11,
    borderLeftColor: 'transparent',
    borderBottomColor: backgroundColor,
    zIndex: 3
  },
  bottomShape: {
    position: 'absolute',
    width: width - 20,
    height: height - 320,
    bottom: 0,
    backgroundColor,
    zIndex: 3
  },
  imageFilter: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: firstColor,
    opacity: 0.5,
    zIndex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  floatingText: {
    fontSize: 20,
    padding: 6,
    color: textColor_2,
    opacity: 1
  },
  cover: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  textDifficulty: {
    fontWeight: 'bold',
    color: cardTextColor_2
  },
  textSummary: {
    marginTop: 10,
    fontStyle: 'italic',
    fontSize: 16,
    color: cardTextColor
  },
  icon: {
    fontSize: 22,
    color: firstColor
  },
  textIcon: {
    color: cardTextColor
  },
  textBody_2: {
    color: cardTextColor_2
  },
  button: {}
});

export default TourCard;

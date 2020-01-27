import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import server from '../api/server';

import TourContext from '../context/TourContext';
import PopupContext from '../context/PopupContext';
import LoadingContext from '../context/LoadingContext';
import MessageContext from '../context/MessageContext';
import UserContext from '../context/UserContext';

import PopupReview from './PopupReview';

import Button from './Button';

import {
  width,
  height,
  firstColor_major,
  textColor_2
} from '../constant/constant';

const TopHeaderDetail = () => {
  // CONTEXT
  const setComp = useContext(PopupContext);
  const { currentTour: tour } = useContext(TourContext);
  const handleLoading = useContext(LoadingContext);
  const handleMessage = useContext(MessageContext);
  const { currentUser: user } = useContext(UserContext);

  // FUNCTION

  const createReview = async (text, rate) => {
    try {
      handleLoading(true, 'Loading...');
      body = {
        review: text,
        rating: rate,
        tour: tour._id,
        user: user._id
      };
      await server.post(`api/v1/reviews`, body);
      setComp(null);
      handleLoading(false, '');
      return handleMessage(true, 'Review created successfully!');
    } catch (err) {
      console.log('Error creating review', err || err.response);
      if (err.response) return handleMessage(true, err.response.message);
      handleLoading(false, '');
    }
  };

  const handleReview = () => {
    return (
      <PopupReview
        tourIni={tour}
        backCallback={() => setComp(null)}
        sendCallback={createReview}
        closeCallBack={() => setComp(null)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {tour.isBooked ? (
        <Button
          style={styles.button}
          text="LEAVE A REVIEW!"
          callBack={() => setComp(handleReview())}
        />
      ) : (
        <Button style={styles.button} text="BOOK NOW!" />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 2,
    left: width / 18
  },
  button: {
    backgroundColor: firstColor_major,
    height: height / 14
  },
  containerBooked: {
    flex: 1,
    width: width / 2.5,
    height: height / 14,
    left: width / 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: height / 14,
    backgroundColor: firstColor_major
  },
  textBooked: {
    padding: 2,
    fontSize: 14,
    color: textColor_2
  }
});

export default TopHeaderDetail;

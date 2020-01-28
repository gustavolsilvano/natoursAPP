import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import server from '../api/server';

import TourContext from '../context/TourContext';
import PopupContext from '../context/PopupContext';
import LoadingContext from '../context/LoadingContext';
import MessageContext from '../context/MessageContext';
import UserContext from '../context/UserContext';

import CheckoutCard from './CheckourCard';
import PopupReview from './PopupReview';

import Button from './Button';

import {
  width,
  height,
  firstColor_major,
  textColor_2
} from '../constant/constant';

const TopHeaderDetail = ({ navigation }) => {
  // CONTEXT
  const setComp = useContext(PopupContext);
  const { currentTour: tour, setCurrentTour } = useContext(TourContext);
  const handleLoading = useContext(LoadingContext);
  const handleMessage = useContext(MessageContext);
  const { currentUser: user } = useContext(UserContext);

  // FUNCTION

  const handleSubmitBooking = async (
    // card_holder_name: 'abc',
    // card_expiration_date: '1225',
    // card_number: '4111.1111.1111.1111',
    // card_cvv: '123'
    cardName,
    cardNumber,
    cardExpiration,
    cardCvv
  ) => {
    try {
      handleLoading(true, 'Loading...');
      const body = { cardNumber, cardCvv, cardName, cardExpiration, tour };
      const response = await server.post(`/api/v1/checkout/${tour._id}`, body, {
        headers: {
          authorization: `Bearer ${user.token}`
        }
      });
      if (response.data.data.transaction.paid) {
        handleMessage(true, 'Tour booked successfully!');
        setComp(null);
        setCurrentTour({ ...tour, isBooked: true });
      }
      handleLoading(false, '');
      return;
    } catch (err) {
      console.log('Error sending booking request', err.response.message || err);
      if (err.response) handleMessage(true, err.response.message);
      handleLoading(false, '');
    }
  };

  const handleCheckout = () => {
    return (
      <CheckoutCard
        tour={tour}
        yesCallback={handleSubmitBooking}
        noCallback={() => setComp(null)}
        closeCallback={() => setComp(null)}
      />
    );
  };

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
        <Button
          style={styles.button}
          text="BOOK NOW!"
          callBack={() => setComp(handleCheckout())}
        />
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

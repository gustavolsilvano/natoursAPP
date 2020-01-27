import React, { useEffect, useContext, useState, useRef } from 'react';
import { View, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import server from '../../../api/server';

import UserContext from '../../../context/UserContext';
import LoadingContext from '../../../context/LoadingContext';
import MessageContext from '../../../context/MessageContext';
import PopupContext from '../../../context/PopupContext';

import ReviewCard from '../../../components/ReviewCard/ReviewCard';
import PopupReview from '../../../components/PopupReview';

import styles from './style';
import { textColor_2 } from '../../../constant/constant';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyReviewsScreeen = () => {
  // REF
  const currentRef = useRef(null);

  // CONTEXT
  const { currentUser: user } = useContext(UserContext);
  const handleLoading = useContext(LoadingContext);
  const handleMessage = useContext(MessageContext);
  const setComp = useContext(PopupContext);

  // STATE
  const [reviews, setReviews] = useState(null);
  const getReviews = async () => {
    try {
      handleLoading(true, 'Loading...');
      const response = await server.get(`/api/v1/reviews/${user._id}`);
      setReviews(response.data.data.docs);
      handleLoading(false, '');
    } catch (err) {
      console.log('Error retrieving review', err || err.response);
      if (err.response) return handleMessage(true, err.response.message);
      handleLoading(false, '');
    }
  };

  // EFFECT
  useEffect(() => {
    getReviews();
  }, []);

  // FUNCTION

  const deleteLocalReview = () => {
    const filtered = reviews.filter(el => {
      return el._id !== currentRef.current._id;
    });
    setReviews(filtered);
  };

  const deleteReview = async () => {
    try {
      handleLoading(true, 'Loading...');
      await server.delete(`/api/v1/reviews/${currentRef.current._id}`);
      setComp(null);
      deleteLocalReview();
      handleLoading(false, '');
    } catch (err) {
      handleLoading(false, '');
      console.log('Error updating review', err.response || err);
      if (err.response) return handleMessage(true, err.reponse.data.message);
    }
  };

  const updateLocalReview = (text, rate) => {
    reviews.map(el => {
      if (el._id === currentRef.current._id) {
        el.review = text;
        el.rating = rate;
      }
    });
  };

  const updateReview = async (text, rate) => {
    const item = currentRef.current;
    try {
      handleLoading(true, 'Loading...');
      const body = { rating: rate, review: text };
      await server.patch(`/api/v1/reviews/${item._id}`, body);
      setComp(null);
      updateLocalReview(text, rate);
      handleLoading(false, '');
    } catch (err) {
      handleLoading(false, '');
      console.log('Error updating review', err.response || err);
      if (err.response) return handleMessage(true, err.reponse.data.message);
    }
  };
  const handleReviewPress = item => {
    setComp(
      <PopupReview
        closeCallback={() => setComp(null)}
        sendCallback={updateReview}
        backCallback={() => setComp(null)}
        deleteCallback={deleteReview}
        reviewIni={item.review}
        rateIni={item.rating}
        tourIni={item.tour}
      />
    );
  };

  return (
    <View style={styles.container}>
      {reviews ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={reviews}
          keyExtractor={reviews._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  currentRef.current = item;
                  handleReviewPress(item);
                }}
              >
                <ReviewCard review={item} isMyReviewScreen={true} />
              </TouchableOpacity>
            );
          }}
        />
      ) : null}
    </View>
  );
};

MyReviewsScreeen.navigationOptions = {
  title: 'MY REVIEWS',
  tabBarIcon: () => (
    <Feather
      name="star"
      style={{ alignSelf: 'flex-end', fontSize: 16, color: textColor_2 }}
    />
  )
};

export default MyReviewsScreeen;

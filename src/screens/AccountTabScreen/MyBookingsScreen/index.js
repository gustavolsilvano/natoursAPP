import React, { useContext, useState, useRef } from 'react';
import { View, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import TourCard from '../../../components/TourCard';

import TourContext from '../../../context/TourContext';

import styles from './style';
import {
  textColor_2,
  firstColor_minor,
  firstColor
} from '../../../constant/constant';

import { width } from '../../../constant/constant';

const MyBookingsScreeen = () => {
  // CONTEXT
  const { tours } = useContext(TourContext);

  // STATE

  const [bookings, setBookings] = useState(() => {
    const booked = [];
    tours.map(el => {
      if (el.isBooked === true) booked.push(el);
    });
    return booked;
  });

  // INDICATOR

  const resetColor = () => {
    let arr = [];
    for (let i = 0; i < bookings.length; i++) {
      arr.push(firstColor_minor);
    }
    return arr;
  };

  // REF
  const currentIndex = useRef();

  // STATE
  const [indColor, setIndColor] = useState(() => {
    let arrColor = resetColor();
    arrColor[0] = firstColor;
    return arrColor;
  });

  const handleScroll = x => {
    const index = Math.round(x / width);
    if (currentIndex.current !== index) {
      currentIndex.current = index;
      let arrColor = resetColor();
      arrColor[index] = firstColor;
      setIndColor(arrColor);
    }
  };
  // -------------------------RENDER--------------------

  return (
    <View style={styles.container}>
      {bookings ? (
        <FlatList
          onScroll={event => handleScroll(event.nativeEvent.contentOffset.x)}
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index
          })}
          snapToInterval={width}
          decelerationRate={'fast'}
          disableIntervalMomentum={true}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={bookings}
          keyExtractor={bookings._id}
          renderItem={({ item }) => {
            return <TourCard tour={item} isBooked={true} />;
          }}
        />
      ) : null}
      <View style={styles.indicator}>
        {bookings.map((el, ind) => {
          return (
            <View
              key={ind}
              style={[styles.ind, { backgroundColor: indColor[ind] }]}
            />
          );
        })}
      </View>
    </View>
  );
};

MyBookingsScreeen.navigationOptions = {
  title: 'MY BOOKINGS',
  tabBarIcon: () => (
    <Feather
      name="briefcase"
      style={{ alignSelf: 'flex-end', fontSize: 16, color: textColor_2 }}
    />
  )
};

export default MyBookingsScreeen;

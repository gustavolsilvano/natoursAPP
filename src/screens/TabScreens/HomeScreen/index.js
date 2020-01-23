import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import TourCard from '../../../components/TourCard';

import styles from './style';

import server from '../../../api/server';
import { FlatList } from 'react-native-gesture-handler';

import { width } from '../../../constant/constant';

const HomeScreen = () => {
  // REF
  const listRef = useRef();

  // STATE
  const [tours, setTours] = useState(null);

  // FUNCTIONS
  const getTours = async () => {
    try {
      const toursDef = await server.get('/api/v1/tours');
      setTours(toursDef.data.data.docs);
    } catch (err) {
      console.log('Erro ao buscar os tours', err || err.response);
    }
  };

  // EFFECT
  useEffect(() => {
    getTours();
  }, []);

  // -------------------------RENDER--------------------

  return (
    <View style={styles.container}>
      {tours ? (
        <FlatList
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index
          })}
          snapToInterval={width}
          decelerationRate={'fast'}
          disableIntervalMomentum={true}
          ref={listRef}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={tours}
          keyExtractor={tours._id}
          renderItem={({ item }) => {
            return <TourCard tour={item} />;
          }}
        />
      ) : null}
    </View>
  );
};
export default HomeScreen;

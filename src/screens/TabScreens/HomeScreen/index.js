import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import TourCard from '../../../components/TourCard';
import TourCardPlaceHolder from './components/TourCardPlaceHolder';

import TourContext from '../../../context/TourContext';
import UserContext from '../../../context/UserContext';

import styles from './style';

import server from '../../../api/server';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { width } from '../../../constant/constant';

const HomeScreen = () => {
  // CONTEXT
  const { currentUser: user } = useContext(UserContext);
  const { tours, setTours } = useContext(TourContext);

  // FUNCTIONS
  const getTours = async () => {
    try {
      let toursDef = await server.get('/api/v1/tours');
      let bookingsDef = await server.get('/api/v1/users/myTours', {
        headers: {
          authorization: `Bearer ${user.token}`
        }
      });

      toursDef = toursDef.data.data.docs;
      bookingsDef = bookingsDef.data.data.tours;

      toursDef.forEach(elTour => {
        bookingsDef.forEach(elBook => {
          if (elBook._id === elTour._id && !elTour.isBooked) {
            elTour.isBooked = true;
          }
        });
      });

      setTours(toursDef);
    } catch (err) {
      console.log('Error retrieving data', err || err.response);
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
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={tours}
          keyExtractor={tours._id}
          renderItem={({ item }) => {
            return <TourCard tour={item} />;
          }}
        />
      ) : (
        <TourCardPlaceHolder />
      )}
    </View>
  );
};

HomeScreen.navigatioOptions = {
  title: 'Tours',
  tabBarIcon: () => (
    <Feather
      name="profile"
      style={{ alignSelf: 'flex-end', fontSize: 16, color: textColor_2 }}
    />
  )
};

export default HomeScreen;

import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './style';
import {
  imageTourURL,
  width,
  firstColor,
  firstColor_minor
} from '../../../constant/constant';
import Header from '../../../components/Header';
import { QuickFacts, TourDescription, TourGuides } from './components';
import { ScrollView } from 'react-native-gesture-handler';

const DetailScreen = ({ navigation }) => {
  const tour = navigation.getParam('tour', null);

  const [bodyIndicator, setBodyIndicator] = useState({
    ind1: firstColor,
    ind2: firstColor_minor,
    ind3: firstColor_minor
  });
  const handleScroll = x => {
    if (x <= width / 4)
      setBodyIndicator({
        ind1: firstColor,
        ind2: firstColor_minor,
        ind3: firstColor_minor
      });
    if (x >= width / 4 && x < width * 1.2)
      setBodyIndicator({
        ind1: firstColor_minor,
        ind2: firstColor,
        ind3: firstColor_minor
      });
    if (x >= width * 1.2)
      setBodyIndicator({
        ind1: firstColor_minor,
        ind2: firstColor_minor,
        ind3: firstColor
      });
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

      <View style={styles.containerBody}>
        <ScrollView
          onScroll={event => handleScroll(event.nativeEvent.contentOffset.x)}
          snapToInterval={width}
          decelerationRate={'fast'}
          disableIntervalMomentum={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.bodyScrollView}
        >
          <QuickFacts tour={tour} />
          <TourGuides tour={tour} />
          <TourDescription tour={tour} />
        </ScrollView>
        <View style={styles.indicator}>
          <View style={[styles.ind, { backgroundColor: bodyIndicator.ind1 }]} />
          <View style={[styles.ind, { backgroundColor: bodyIndicator.ind2 }]} />
          <View style={[styles.ind, { backgroundColor: bodyIndicator.ind3 }]} />
        </View>
      </View>

      {/* BOTTOM */}

      <View style={styles.containerBottom}>
        <View style={styles.triangleCornerDown} />
        <Image
          style={styles.bottomImages}
          source={{ uri: `${imageTourURL}/${tour.images[0]}` }}
        />
        <Image
          style={styles.bottomImages}
          source={{ uri: `${imageTourURL}/${tour.images[1]}` }}
        />

        {/* <Image
          style={styles.bottomImages}
          source={{ uri: `${imageTourURL}/${tour.images[1]}` }}
        /> */}
      </View>
    </View>
  );
};

DetailScreen.navigationOptions = {
  headerTitle: () => <Header left={-width / 5} />
};

export default DetailScreen;

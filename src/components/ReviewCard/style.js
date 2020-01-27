import { StyleSheet } from 'react-native';
import {
  width,
  cardTextColor,
  cardTextColor_2,
  firstColor_minor
} from '../../constant/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 20,
    margin: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: firstColor_minor
  },
  containerUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerRating: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerUserTourName: {
    flex: 1
  },
  rating: {
    fontSize: 16
  },
  userPhoto: {
    marginRight: 10,
    height: width / 6,
    width: width / 6,
    borderRadius: width / 6
  },
  textUserName: {
    fontSize: 16,
    color: cardTextColor_2
  },
  textTourName: {
    fontSize: 12,
    color: cardTextColor,
    fontStyle: 'italic'
  },
  textReview: {
    marginTop: 10,
    flex: 1,
    textAlign: 'justify',
    color: cardTextColor,
    fontStyle: 'italic'
  },
  textBlank: {
    color: cardTextColor,
    alignSelf: 'center',
    fontStyle: 'italic'
  }
});

export default styles;

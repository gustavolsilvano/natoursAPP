import { StyleSheet } from 'react-native';
import {
  width,
  firstColor,
  backgroundColor,
  cardTextColor,
  cardTextColor_2
} from '../../../constant/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width
  },
  containerBody: {
    flex: 2,
    backgroundColor,
    zIndex: 10
  },
  containerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6
  },
  containerGuide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerImage: {
    flex: 1
  },
  containerDescription: {
    flex: 1,
    borderWidth: 1,
    width
  },
  subContainerBody: {
    flex: 1,
    marginTop: 4,
    paddingHorizontal: 10,
    width
  },
  subSubContainerBody: {
    flex: 1
  },
  imageFilter: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: firstColor,
    opacity: 0.5,
    zIndex: 2
  },
  textTitles: {
    color: firstColor,
    fontSize: 16
  },
  icon: {
    fontSize: 20,
    color: firstColor
  },
  textIcon: {
    fontSize: 16,
    color: cardTextColor_2
  },
  textIcon_2: {
    fontSize: 16,
    color: cardTextColor
  },
  guidePhoto: {
    marginTop: 10,
    marginRight: 10,
    height: width / 6,
    width: width / 6,
    borderRadius: width / 6
  },
  description: {
    textAlign: 'justify',
    height: '100%'
  },
  bodyScrollView: {
    flex: 1
  },
  indicator: {
    flex: 0.06,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ind: {
    width: 6,
    height: 6,
    marginHorizontal: 5,
    borderRadius: 6
  }
});

export default styles;

import { StyleSheet } from 'react-native';
import {
  width,
  firstColor,
  height,
  backgroundColor,
  textColor_2,
  backgroundColor_2,
  cardTextColor,
  cardTextColor_2
} from '../../../constant/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width
  },
  containerHeader: {
    flex: 1.5,
    flexDirection: 'column',
    alignContent: 'stretch',
    alignItems: 'stretch',
    zIndex: 3
  },
  containerBody: {
    flex: 2,
    backgroundColor,
    zIndex: 10
  },
  containerBottom: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 1
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
  cover: {
    flex: 1
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
  triangleCorner: {
    position: 'absolute',
    bottom: -1,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: width,
    borderBottomWidth: height / 11,
    borderLeftColor: 'transparent',
    borderBottomColor: backgroundColor,
    zIndex: 3
  },
  triangleCornerDown: {
    zIndex: 5,
    position: 'absolute',
    top: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: width,
    borderTopWidth: height / 14,
    borderRightColor: 'transparent',
    borderTopColor: backgroundColor
  },
  floatingText: {
    fontSize: 20,
    padding: 6,
    color: textColor_2,
    opacity: 1
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
  bottomImages: {
    width: width / 2
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

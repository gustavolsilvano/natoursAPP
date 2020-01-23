import { StyleSheet } from 'react-native';

import {
  firstColor,
  height,
  width,
  textColor_2,
  backgroundColor
} from '../../../constant/constant';

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1.5,
    flexDirection: 'column',
    alignContent: 'stretch',
    alignItems: 'stretch',
    zIndex: 3
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
  floatingText: {
    fontSize: 20,
    padding: 6,
    color: textColor_2,
    opacity: 1
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
  containerBottom: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 1
  },
  bottomImages: {
    width: width / 2
  }
});

export default styles;

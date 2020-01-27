import { StyleSheet } from 'react-native';
import {
  height,
  width,
  firstColor_minor,
  blackColorTransparent,
  warningColor
} from '../../constant/constant';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: height / 1.8 - (height * 0.4) / 2,
    left: width / 2 - (width * 0.9) / 2,
    width: width * 0.9,
    height: '40%',
    zIndex: 101,
    borderRadius: 4,
    backgroundColor: firstColor_minor
  },
  overall: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 100,
    backgroundColor: blackColorTransparent
  },
  containerIconClose: {
    position: 'absolute',
    zIndex: 110,
    left: width * 0.9 - 10,
    top: -10,
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center'
  },
  containerIconDelete: {
    position: 'absolute',
    zIndex: 110,
    left: width * 0.9 - 20,
    bottom: -15,
    width: 30,
    height: 30,
    backgroundColor: warningColor,
    borderRadius: 20,
    justifyContent: 'center'
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-around'
  },
  containerText: {
    flex: 4,
    width: '100%'
  },
  containerBody: {
    flex: 1,
    width: '100%'
  },
  containerRating: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 18,
    color: firstColor_minor,
    zIndex: 1,
    top: 0
  },
  firstButton: {
    width: '40%'
  },
  secondButton: {
    backgroundColor: warningColor,
    width: '40%'
  },
  iconClose: {
    fontSize: 14,
    alignSelf: 'center'
  },

  iconDelete: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'white'
  },
  inputText: {
    width: '100%',
    marginTop: 25,
    height: height / 6,
    backgroundColor: 'white',
    top: -height / 40,
    padding: 10
  },
  rating: {
    fontSize: 22,
    marginHorizontal: 4
  }
});

export default styles;

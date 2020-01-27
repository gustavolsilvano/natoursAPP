import { StyleSheet } from 'react-native';
import { width, height, firstColor_minor } from '../../../constant/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  picture: {
    width,
    height,
    flex: 1
  },
  title: {
    position: 'absolute',
    fontSize: height / 16,
    alignSelf: 'center',
    top: height / 2.6,
    zIndex: 1,
    color: firstColor_minor,
    letterSpacing: 6
  },
  subtitle: {
    position: 'absolute',
    fontSize: height / 40,
    alignSelf: 'center',
    top: height / 2,
    zIndex: 1,
    color: firstColor_minor,
    letterSpacing: 4
  },
  imageFilter: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#28b487',
    opacity: 0.8
  }
});

export default styles;

import { StyleSheet } from 'react-native';
import { width, height, firstColor } from '../../../../constant/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerPhotoNewPhoto: {
    flex: 3,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerErasePhoto: {
    position: 'absolute',
    zIndex: 1,
    borderWidth: 1,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    left: width / 1.5,
    bottom: height / 2.1,
    backgroundColor: 'white'
  },
  containerButtons: {
    flex: 1,
    justifyContent: 'center'
  },
  erasePhoto: {
    fontSize: 20,
    top: -1.4
  },
  userPhoto: {
    width: width / 1.5,
    height: width / 1.5,
    borderRadius: width / 1.5
  }
});

export default styles;

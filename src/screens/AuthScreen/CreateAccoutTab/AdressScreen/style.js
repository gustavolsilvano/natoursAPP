import { StyleSheet } from 'react-native';
import { width, height, firstColor } from '../../../../constant/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  subContainer: {
    width: width - 20,
    margin: 10,
    flex: 1
  },
  containerPhotoNewPhoto: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10
  },
  containerErasePhoto: {
    position: 'absolute',
    zIndex: 1,
    borderWidth: 1,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    left: width / 4.2,
    bottom: height / 9,
    backgroundColor: 'white'
  },
  erasePhoto: {
    fontSize: 12,
    top: -1.2
  },
  userPhoto: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  textButton: {
    color: firstColor,
    marginLeft: 10,
    fontSize: 16
  },
  fillField: {}
});

export default styles;

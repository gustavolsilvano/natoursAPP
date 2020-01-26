import { StyleSheet } from 'react-native';

import { width, firstColor, height } from '../../../constant/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    alignItems: 'center'
  },
  containerFill: {
    flex: 3,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerButtons: {
    flex: 2,
    marginHorizontal: 20
  },
  containerPhotoNewPhoto: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10
  },
  containerUpdateButton: {
    flex: 1
  },
  title: {
    position: 'absolute',
    top: height / 12,
    fontSize: 20,
    color: firstColor,
    alignSelf: 'flex-start'
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
  button: {
    width: width / 2,
    alignSelf: 'flex-end',
    marginTop: 10
  }
});

export default styles;

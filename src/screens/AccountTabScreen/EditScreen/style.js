import { StyleSheet } from 'react-native';

import {
  width,
  firstColor,
  height,
  textColor_2,
  warningColor
} from '../../../constant/constant';

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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  containerLogout: {
    height: height / 18,
    width: height / 18,
    borderRadius: height / 18,
    justifyContent: 'center',
    alignContent: 'center',
    top: 10,
    backgroundColor: warningColor
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
    marginTop: 10
  },
  erasePhoto: {
    fontSize: 12,
    top: -1.2
  },
  iconLogout: {
    fontSize: 20,
    alignSelf: 'center',
    color: textColor_2
  }
});

export default styles;

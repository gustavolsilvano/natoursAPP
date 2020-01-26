import { StyleSheet } from 'react-native';
import {
  backgroundColor,
  textColor,
  textColor_2,
  width,
  height
} from '../../../constant/constant';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  containerHeader: {
    flex: 1
  },
  containerFields: {
    flex: 1,
    backgroundColor
  },
  containerForgot: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 6
  },
  containerRemember: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerNewUser: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  containerTitle: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: textColor_2,
    marginTop: height / 10,
    marginLeft: 10,
    borderRadius: 20,
    height: 44,
    padding: 6
  },
  containerFill: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerButtons: {
    flex: 1
  },
  containerBody: {
    flex: 1,
    backgroundColor,
    paddingHorizontal: 20,
    zIndex: 2
  },
  titleText: {
    color: textColor_2,
    fontSize: 24,
    marginLeft: 20
  },
  logo: {
    width: 50
  },
  clickHereText: {
    color: textColor,
    alignSelf: 'flex-end'
  },
  newUserText: {
    color: '#28b487',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'flex-end'
  },
  triangleCorner: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: width,
    borderBottomWidth: height / 12,
    borderLeftColor: 'transparent',
    borderBottomColor: backgroundColor,
    zIndex: 1
  },
  loginPicture: {
    width,
    height: height / 2
  },
  imageFilter: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#28b487',
    opacity: 0.5
  }
});

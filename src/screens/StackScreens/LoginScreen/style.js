import { StyleSheet } from 'react-native';
import {
  backgroundColor,
  logoStye,
  textColor,
  textColor_2,
  width,
  height
} from '../../../constant/constant';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  containerHeader: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  containerFields: {
    flex: 3,
    alignItems: 'center'
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
    marginBottom: 20
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: textColor_2,
    marginTop: 30,
    marginLeft: 10,
    borderRadius: 20,
    height: 44,
    padding: 6
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
    bottom: 348,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: width,
    borderBottomWidth: height / 5,
    borderLeftColor: 'transparent',
    borderBottomColor: backgroundColor
  },
  bottomShape: {
    position: 'absolute',
    width,
    height: 348,
    bottom: 0,
    backgroundColor
  },
  loginPicture: {
    position: 'absolute'
  },
  imageFilter: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#28b487',
    opacity: 0.5
  }
});

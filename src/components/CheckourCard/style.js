import { StyleSheet } from 'react-native';
import {
  height,
  width,
  firstColor_minor,
  blackColorTransparent,
  warningColor,
  textColor_2,
  textColor,
  firstColor_major
} from '../../constant/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: height / 2 - (height * 0.8) / 2,
    left: width / 2 - (width * 0.85) / 2,
    width: '85%',
    zIndex: 101,
    borderRadius: 4,
    height: '80%',
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
    left: width * 0.85 - 10,
    top: -10,
    width: 20,
    height: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center'
  },
  containerFillField: {
    marginBottom: 20
  },
  containerButton: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    zIndex: 110,
    bottom: height / 16,
    width: '80%'
  },
  containerCVVExpiration: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center'
  },
  containerTextInputCVV: {
    width: '40%'
  },
  containerTextInputExpi: {
    width: '60%'
  },
  containerPrice: {
    bottom: 100,
    paddingTop: 10,
    width: '110%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderColor: firstColor_major
  },
  textTour: {
    fontSize: 20
  },
  textPrice: {
    fontSize: 20,
    color: firstColor_major
  },
  creditCard: {
    color: 'white'
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    color: firstColor_minor
  },
  iconClose: {
    fontSize: 14,
    alignSelf: 'center'
  },
  textInput: {
    color: 'white',
    fontSize: 14,
    left: 10,
    bottom: -10,
    backgroundColor: 'black'
  },
  inputTextFillField: {
    borderWidth: 2,
    borderColor: 'white',
    borderBottomColor: 'white',
    height: height / 14,
    color: 'white'
  },
  inputTextCVV: {
    borderWidth: 2,
    borderColor: 'white',
    borderBottomColor: 'white',
    width: '60%',
    height: height / 14,
    color: 'white'
  },
  inputTextExpiration: {
    borderWidth: 2,
    borderColor: 'white',
    borderBottomColor: 'white',
    width: '90%',
    height: height / 14,
    color: 'white'
  },
  tourName: {
    position: 'absolute',
    fontSize: 26,
    top: height * 0.06,
    left: width / 12,
    backgroundColor: '	rgba(0, 0, 0,.8)',
    color: textColor_2,
    paddingHorizontal: 10,
    borderRadius: 4,
    zIndex: 110
  },
  button: {
    width: width / 2.5
  },
  noButton: {
    backgroundColor: warningColor,
    width: width / 3
  }
});

export default styles;

import { StyleSheet } from 'react-native';
import {
  height,
  width,
  firstColor_minor,
  blackColorTransparent,
  warningColor,
  cardTextColor
} from '../../constant/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: height / 1.8 - height * 0.4,
    left: width / 2 - (width * 0.9) / 2,
    width: width * 0.9,
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
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center'
  },
  containerFillField: {
    marginBottom: 20
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    color: firstColor_minor
  },
  noButton: {
    backgroundColor: warningColor,
    marginTop: 20
  },
  iconClose: {
    fontSize: 14,
    alignSelf: 'center'
  },
  cardNumberInput: {
    color: 'white'
  },
  inputTextFillField: {
    borderBottomColor: 'white'
  }
});

export default styles;

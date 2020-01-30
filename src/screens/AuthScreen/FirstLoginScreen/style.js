import { StyleSheet } from 'react-native';
import {
  firstColor,
  firstColor_minor,
  width,
  firstColor_major
} from '../../../constant/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: firstColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerTextInput: {
    width: '80%',
    alignSelf: 'center'
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  containerLogo: {
    flex: 0.5,
    borderBottomWidth: 1,
    alignItems: 'center',
    width: '90%',
    borderBottomColor: firstColor_major,
    marginTop: 40
  },
  containerBottom: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly'
  },
  textTextInput: {
    color: firstColor_minor
  },
  textInput: {
    borderBottomColor: firstColor_minor
  },
  logo: {
    flex: 1,
    width: width / 3
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: firstColor_minor
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    color: firstColor_minor
  }
});

export default styles;

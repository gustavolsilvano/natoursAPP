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
  containerUpdateButton: {
    flex: 1,
    marginHorizontal: 20
  },
  title: {
    position: 'absolute',
    top: height / 12,
    fontSize: 20,
    color: firstColor,
    alignSelf: 'flex-start'
  },
  containerFill: {
    flex: 3,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: width / 2,
    alignSelf: 'flex-end',
    marginTop: 10
  }
});

export default styles;

import { StyleSheet } from 'react-native';

import { backgroundColor } from '../../../constant/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor
  },
  containerBody: {
    flex: 2
  },
  containerIndicator: {
    flex: 0.1
  },
  indicator: {
    flex: 0.06,
    top: -1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ind: {
    width: 6,
    height: 6,
    marginHorizontal: 5,
    borderRadius: 6
  }
});

export default styles;

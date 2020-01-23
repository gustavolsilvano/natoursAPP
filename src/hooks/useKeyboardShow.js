import { useEffect } from 'react';
import { Keyboard } from 'react-native';

export default (show, hide) => {
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      show();
    });

    Keyboard.addListener('keyboardDidHide', () => {
      hide();
    });

    return () => {
      Keyboard.removeListener('keyboardDidShow');
      Keyboard.removeListener('keyboardDidHide');
    };
  }, []);
};

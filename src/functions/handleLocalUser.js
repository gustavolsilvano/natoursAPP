import { AsyncStorage } from 'react-native';

const saveLocalUser = async userToken => {
  try {
    await AsyncStorage.setItem('user_natour', userToken);
  } catch (err) {
    console.error('Error saving local user ', err);
  }
};

const loadLocalUser = async () => {
  try {
    return await AsyncStorage.getItem('user_natour');
  } catch (err) {
    console.log('Error loading local user', err);
  }
};

const deleteLocalUser = async () => {
  try {
    await AsyncStorage.removeItem('user_natour');
  } catch (err) {
    console.log('Error deleting local user', err);
  }
};

export { saveLocalUser, loadLocalUser, deleteLocalUser };

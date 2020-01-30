import React, { useContext, useEffect } from 'react';
import { View, Image, Text } from 'react-native';

import server from '../../../api/server';

import styles from './style';

import { loadingPicture } from '../../../constant/constant';

import UserContext from '../../../context/UserContext';
import LoadingContext from '../../../context/LoadingContext';

import {
  loadLocalUser,
  deleteLocalUser
} from '../../../functions/handleLocalUser';

const LoadingUserByTokenScreen = ({ navigation }) => {
  // CONTEXT
  const handleLoading = useContext(LoadingContext);
  const { setCurrentUser } = useContext(UserContext);

  // FUNCTION
  const getLocalUser = async () => {
    // await deleteLocalUser();
    handleLoading(true, 'Loading...');
    try {
      const response = await loadLocalUser();
      if (response) {
        try {
          const responseUser = await server.get(
            '/api/v1/users/getUserByToken',
            {
              headers: {
                authorization: `Bearer ${response}`
              }
            }
          );
          setCurrentUser({ ...responseUser.data.data.user, token: response });
          handleLoading(false, '');
          return navigation.navigate('App');
        } catch (err) {
          handleLoading(false, '');
          console.log('Error retrieving user', err);
        }
      }
      handleLoading(false, '');
      return navigation.navigate('Auth');
    } catch (err) {
      console.log('Error loading local user', err);
      handleLoading(false, '');
    }
  };

  useEffect(() => {
    // deleteLocalUser();
    getLocalUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OUTDOORDS</Text>
      <Text style={styles.subtitle}>IS WHERE LIFE HAPPENS</Text>
      <Image source={loadingPicture} style={styles.picture} />
      <View style={styles.imageFilter} />
    </View>
  );
};

export default LoadingUserByTokenScreen;

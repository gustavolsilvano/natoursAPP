import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';

import server from '../../../api/server';

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
    handleLoading(true, 'Loading...');
    try {
      const response = await loadLocalUser();
      console.log(response);
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
          setCurrentUser(responseUser.data.data.user);
          handleLoading(false, '');
          return navigation.navigate('App');
        } catch (err) {
          handleLoading(false, '');
          console.log('Error retrieving user', err);
        }
      }
      handleLoading(false, '');
      return navigation.navigate('Login');
    } catch (err) {
      console.log('Error loading local user', err);
      handleLoading(false, '');
    }
  };

  useEffect(() => {
    // deleteLocalUser();
    getLocalUser();
  });

  return <View></View>;
};

export default LoadingUserByTokenScreen;

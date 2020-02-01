import React, { useContext, useEffect, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import Button from '../../../../components/Button';

import server from '../../../../api/server';

import LoadingContext from '../../../../context/LoadingContext';
import MessageContext from '../../../../context/MessageContext';
import NewUserContext from '../../../../context/newUserContext';
import {
  defaultUserPhotoURL,
  imageUserURL
} from '../../../../constant/constant';
import styles from './style';

import pickImage from '../../../../functions/handleSelectImage';
import createForm from '../../../../functions/createForm';
import { NavigationActions, StackActions } from 'react-navigation';

const PhotoNSubmitScreen = ({ navigation }) => {
  // NAVIGATION
  const loginScreenDefault = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Login' })]
  });

  // REF
  const imageToUpload = useRef(null);

  // CONTEXT
  const { newUser, setNewUser } = useContext(NewUserContext);
  const handleLoading = useContext(LoadingContext);
  const handleMessage = useContext(MessageContext);

  // FUNCTION

  const handleBeforeSubmit = () => {
    // Adjusting CPF
    let arr = newUser['CPF NUMBER'].split('.');
    let arr2 = arr[2].split('-');
    const cpf = `${arr[0]}${arr[1]}${arr2[0]}${arr2[1]}`;

    // Adjusting phone number
    let str = newUser['PHONE NUMBER'];
    const phone = [
      `+55${str.slice(1, 3)}${str.slice(5, 10)}${str.slice(11, 15)}`
    ];
    // Adjusting ZIP CODE
    str = newUser['ZIP CODE'].split('-');
    const zipCode = `${str[0]}${str[1]}`;

    // Adjusting Birthday
    str = newUser['BIRTHDAY'].split('/');
    const birthday = `${str[2]}-${str[1]}-${str[0]}`;

    return { cpf, phone, zipCode, birthday };
  };

  const handleSubmit = async () => {
    const dataHandled = handleBeforeSubmit();
    const newUserField = {
      name: newUser.NAME,
      email: newUser.EMAIL,
      password: newUser.PASSWORD,
      passwordConfirm: newUser['CONFIRM PASSWORD'],
      cpfNumber: dataHandled.cpf.toString(),
      phoneNumber: dataHandled.phone,
      birthday: dataHandled.birthday.toString(),
      state: newUser.STATE.toString(),
      city: newUser.CITY.toString(),
      neighborhood: newUser.NEIGHBORHOOD.toString(),
      street: newUser.STREET.toString(),
      number: newUser.NUMBER.toString(),
      zipcode: dataHandled.zipCode.toString()
    };
    const data = createForm(imageToUpload.current);
    try {
      handleLoading(true, 'Loading...');
      const response = await server.post('/api/v1/users/signup', newUserField);
      const userId = response.data.data.user._id;
      await server.post('/api/v1/users/signupPhoto', data, {
        headers: {
          'content-type': `multipart/form-data; boundary=${data._boundary}`,
          user: userId
        }
      });
      navigation.dispatch(loginScreenDefault);
      handleMessage(
        true,
        'Account created! Check your email for your 6 digit code! Remember that you have 10 minutes to activate your account.'
      );
      handleLoading(false, '');
    } catch (err) {
      console.log('Error submiting new user', err);
      if (err.response) handleMessage(true, err.response.data.message);
      handleLoading(false, '');
    }
  };

  const defaultPhoto = () => {
    setNewUser({ ...newUser, photo: `${imageUserURL}/${defaultUserPhotoURL}` });
  };

  const eraseUserPhoto = async () => {
    setNewUser({ ...newUser, photo: { defaultUserPhotoURL } });
    defaultPhoto();
  };

  const handlePickImage = async () => {
    try {
      const response = await pickImage();
      if (response === 'denied')
        return handleMessage(
          true,
          'You need to grant the app permission to reach your storage'
        );
      if (!response.cancelled)
        setNewUser({
          ...newUser,
          photo: response.uri
        });
      imageToUpload.current = response;
    } catch (err) {
      console.log('Error picking photo', err);
    }
  };

  useEffect(() => {
    defaultPhoto();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerPhotoNewPhoto}>
        <TouchableOpacity
          style={styles.containerErasePhoto}
          onPress={eraseUserPhoto}
        >
          <Text style={styles.erasePhoto}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textButton} onPress={handlePickImage}>
          <Image style={styles.userPhoto} source={{ uri: newUser.photo }} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerButtons}>
        <Button text="SUBMIT" callBack={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

PhotoNSubmitScreen.navigationOptions = {
  title: 'PHOTO'
};
export default PhotoNSubmitScreen;

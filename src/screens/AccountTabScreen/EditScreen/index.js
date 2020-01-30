import React, { useState, useContext, useRef } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';

import server from '../../../api/server';
import pickImage from '../../../functions/handleSelectImage';
import createForm from '../../../functions/createForm';

import styles from './style';
import { Feather } from '@expo/vector-icons';

import FillField from '../../../components/FillField';
import Button from '../../../components/Button';
import TextButton from '../../../components/TextButton';

import {
  imageUserURL,
  textColor_2,
  defaultUserPhotoURL
} from '../../../constant/constant';

import { deleteLocalUser } from '../../../functions/handleLocalUser';

import UserContext from '../../../context/UserContext';
import LoadingContext from '../../../context/LoadingContext';
import MessageContext from '../../../context/MessageContext';
import PopupContext from '../../../context/PopupContext';

import PopupCard from '../../../components/PopupCard';

const EditScreen = ({ navigation }) => {
  // REF
  const imageToUpload = useRef(null);

  // CONTEXT
  const { currentUser: user, setCurrentUser } = useContext(UserContext);

  const handleLoading = useContext(LoadingContext);
  const handleMessage = useContext(MessageContext);

  const setComp = useContext(PopupContext);

  // STATE
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [photo, setPhoto] = useState(`${imageUserURL}/${user.photo}`);

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const handleResetNextFocus = () => {
    setNameFocus(false);
    setEmailFocus(false);
  };
  //TODO network error needs to not let go to homescreeen
  // FUNCTION

  const logout = async () => {
    try {
      setComp(null);
      handleLoading(true, 'Loading...');
      await deleteLocalUser();
      handleLoading(false, '');
      navigation.navigate('Login');
    } catch (err) {
      console.log('Error logging out', err);
      handleLoading(false, '');
    }
  };

  const handleLogout = () => {
    setComp(
      <PopupCard
        text={'Are you sure you want to logout?'}
        yesCallback={() => logout()}
        noCallback={() => setComp(null)}
        closeCallback={() => setComp(null)}
      />
    );
  };

  const eraseUserPhoto = async () => {
    try {
      handleLoading(true, 'Loading...');
      setCurrentUser({ ...user, photo: { defaultUserPhotoURL } });
      setPhoto(`${imageUserURL}/${defaultUserPhotoURL}`);
      await server.patch(
        '/api/v1/users/updateMe',
        { photo: defaultUserPhotoURL },
        {
          headers: {
            authorization: `Bearer ${user.token}`
          }
        }
      );
      handleLoading(false, '');
    } catch (err) {
      console.log('Error updating user', err);
      handleMessage(true, err.response.data.message);
      handleLoading(false, '');
    }
  };

  const handleUserUpdate = async () => {
    const data = createForm(imageToUpload.current, name, email);
    try {
      handleLoading(true, 'Loading...');
      const response = await server.patch('/api/v1/users/updateMe', data, {
        headers: {
          'content-type': `multipart/form-data; boundary=${data._boundary}`,
          authorization: `Bearer ${user.token}`
        }
      });
      setCurrentUser({
        ...user,
        name: response.data.data.user.name,
        email: response.data.data.user.email
      });
      handleMessage(true, 'Updated user successfully!');
      handleLoading(false, '');
    } catch (err) {
      console.log('Error updating user', err);
      handleMessage(true, err.response.data.message);
      handleLoading(false, '');
    }
  };
  //TODO change loading screen
  const handlePickImage = async () => {
    try {
      const response = await pickImage();
      if (response === 'denied')
        return handleMessage(
          true,
          'You need to grant the app permission to reach your storage'
        );
      if (!response.cancelled) setPhoto(response.uri);
      imageToUpload.current = response;
    } catch (err) {
      console.log('Error picking photo', err);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        contentContainerStyle={{ flex: 1 }}
        enabled={true}
        keyboardVerticalOffset={0}
        behavior={'position'}
        style={{ flex: 1 }}
      >
        <View style={styles.containerTitle}>
          <Text style={styles.title}>YOUR ACCOUNT SETTINGS</Text>
        </View>
        <View style={styles.containerFill}>
          <FillField
            field="Name"
            type="fullname"
            value={user.name}
            focus={nameFocus}
            resetNextFocus={handleResetNextFocus}
            setNext={() => {
              if (!email) setEmailFocus(true);
              if (email) handleUserUpdate();
            }}
            onChangeTextInput={val => setName(val)}
          />
          <FillField
            field="Email address"
            type="email"
            value={user.email}
            focus={emailFocus}
            resetNextFocus={handleResetNextFocus}
            setNext={() => {
              if (!name) setNameFocus(true);
              if (name) handleUserUpdate();
            }}
            onChangeTextInput={val => setEmail(val)}
            marginTop={30}
          />
        </View>
        <View style={styles.containerButtons}>
          <View style={styles.containerPhotoNewPhoto}>
            <TouchableOpacity
              style={styles.containerErasePhoto}
              onPress={eraseUserPhoto}
            >
              <Text style={styles.erasePhoto}>x</Text>
            </TouchableOpacity>
            <Image style={styles.userPhoto} source={{ uri: photo }} />
            <TextButton
              style={styles.textButton}
              text="Choose new photo"
              callBack={handlePickImage}
            />
          </View>
          <View style={styles.containerUpdateButton}>
            <TouchableOpacity
              style={styles.containerLogout}
              onPress={handleLogout}
            >
              <Feather name="log-out" style={styles.iconLogout} />
            </TouchableOpacity>
            <Button
              style={styles.button}
              text="SAVE SETTINGS"
              callBack={handleUserUpdate}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

EditScreen.navigationOptions = {
  title: 'PROFILE',
  tabBarIcon: () => (
    <Feather
      name="file-text"
      style={{ alignSelf: 'flex-end', fontSize: 16, color: textColor_2 }}
    />
  )
};

export default EditScreen;

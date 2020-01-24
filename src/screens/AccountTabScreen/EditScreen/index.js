import React, { useState, useContext } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './style';
import { AntDesign } from '@expo/vector-icons';

import FillField from '../../../components/FillField';
import Button from '../../../components/Button';
import TextButton from '../../../components/TextButton';

import { imageUserURL, textColor_2 } from '../../../constant/constant';

import UserContext from '../../../context/UserContext';

const EditScreen = ({ navigation }) => {
  // CONTEXT
  const { currentUser: user, setCurrentUser: setUser } = useContext(
    UserContext
  );

  // STATE
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const handleResetNextFocus = () => {
    setNameFocus(false);
    setEmailFocus(false);
  };
  <img
    class="form__user-photo"
    src="/img/users/default.jpg"
    alt="User photo"
  ></img>;
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>YOUR ACCOUNT SETTINGS</Text>
      </View>
      <View style={styles.containerFill}>
        <FillField
          field="Name"
          type="fullname"
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
          <Image
            style={styles.userPhoto}
            source={{ uri: `${imageUserURL}/${user.photo}` }}
          />
          <TextButton style={styles.textButton} text="Choose new photo" />
        </View>
        <View style={styles.containerUpdateButton}>
          <Button style={styles.button} text="SAVE SETTINGS" />
        </View>
      </View>
    </View>
  );
};

EditScreen.navigationOptions = {
  title: 'PROFILE',
  tabBarIcon: () => (
    <AntDesign
      name="profile"
      style={{ alignSelf: 'flex-end', fontSize: 16, color: textColor_2 }}
    />
  )
};

export default EditScreen;

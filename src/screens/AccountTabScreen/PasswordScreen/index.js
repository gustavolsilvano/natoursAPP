import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import FillField from '../../../components/FillField';
import Button from '../../../components/Button';

import { updateLocaluser } from '../../../functions/handleLocalUser';

import UserContext from '../../../context/UserContext';
import LoadingContext from '../../../context/LoadingContext';
import MessageContext from '../../../context/MessageContext';

import server from '../../../api/server';

import styles from './style';
import { textColor_2 } from '../../../constant/constant';

const PasswordScreeen = () => {
  // STATE
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [currentPasswordFocus, setCurrentPasswordFocus] = useState(false);
  const [newPasswordFocus, setNewPasswordFocus] = useState(false);
  const [confirmNewPasswordFocus, setConfirmNewPasswordFocus] = useState(false);

  const handleResetNextFocus = () => {
    setCurrentPasswordFocus(false);
    setNewPasswordFocus(false);
    setConfirmNewPasswordFocus(false);
  };

  // CONTEXT

  const { setCurrentUser } = useContext(UserContext);
  const handleLoading = useContext(LoadingContext);
  const handleMessage = useContext(MessageContext);

  // FUNCTION

  const handlePasswordUpdate = async () => {
    try {
      handleLoading(true, 'Loading...');
      const response = await server.patch('/api/v1/users/updateMyPassword', {
        passwordCurrent: currentPassword,
        password: newPassword,
        passwordConfirm: confirmNewPassword
      });
      await updateLocaluser(response.data.token);
      setCurrentUser({
        ...response.data.data.user,
        token: response.data.token
      });
      handleMessage(true, 'Password changed successfully');
      handleLoading(false, '');
    } catch (err) {
      console.log('Error updating password', err.response || err);
      handleMessage(true, err.response.data.message);
      handleLoading(false, '');
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
          <Text style={styles.title}>PASSWORD CHANGE</Text>
        </View>
        <View style={styles.containerFill}>
          <FillField
            placeholderValue="*********"
            field="Current Password"
            type="password"
            focus={currentPasswordFocus}
            resetNextFocus={handleResetNextFocus}
            setNext={() => {
              if (!newPassword) return setNewPasswordFocus(true);
              if (!confirmNewPassword) return setConfirmNewPasswordFocus(true);
              return handlePasswordUpdate();
            }}
            onChangeTextInput={val => setCurrentPassword(val)}
          />
          <FillField
            placeholderValue="*********"
            marginTop={20}
            field="New Password"
            type="password"
            focus={newPasswordFocus}
            resetNextFocus={handleResetNextFocus}
            setNext={() => {
              if (!currentPassword) return setCurrentPasswordFocus(true);
              if (!confirmNewPassword) return setConfirmNewPasswordFocus(true);
              return handlePasswordUpdate();
            }}
            onChangeTextInput={val => setNewPassword(val)}
          />
          <FillField
            placeholderValue="*********"
            marginTop={20}
            field="Confirm Password"
            type="password"
            focus={confirmNewPasswordFocus}
            resetNextFocus={handleResetNextFocus}
            setNext={() => {
              if (!currentPassword) return setCurrentPasswordFocus(true);
              if (!newPassword) return setNewPasswordFocus(true);
              return handlePasswordUpdate();
            }}
            onChangeTextInput={val => setConfirmNewPassword(val)}
          />
        </View>
        <View style={styles.containerUpdateButton}>
          <Button
            style={styles.button}
            text="SAVE PASSWORD"
            callBack={handlePasswordUpdate}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

PasswordScreeen.navigationOptions = {
  tabBarIcon: () => (
    <Feather
      name="lock"
      style={{ alignSelf: 'flex-end', fontSize: 16, color: textColor_2 }}
    />
  )
};

export default PasswordScreeen;

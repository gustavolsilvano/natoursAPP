import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import styles from './style';

import { logo, loginPicture } from '../../../constant/constant';

import server from '../../../api/server';
import FillField from '../../../components/FillField';
import Button from '../../../components/Button';
import TextButton from '../../../components/TextButton';

import LoadingContext from '../../../context/LoadingContext';
import UserContext from '../../../context/UserContext';
import MessageContext from '../../../context/MessageContext';

import { saveLocalUser } from '../../../functions/handleLocalUser';
import { NavigationActions } from 'react-navigation';

const LoginScreen = ({ navigation }) => {
  // NAVIGATION

  // CONTEXT

  const handleLoading = useContext(LoadingContext);

  const { setCurrentUser } = useContext(UserContext);

  const handleWarning = useContext(MessageContext);

  // STATES

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  // FUNCTIONS

  const handleResetNextFocus = () => {
    setPasswordFocus(false);
    setEmailFocus(false);
  };

  const handleLogin = async () => {
    handleLoading(true, 'Loading...');
    const user = { email, password };
    try {
      const response = await server.post('/api/v1/users/login', user);
      setCurrentUser({
        ...response.data.data.user,
        token: response.data.token
      });
      navigation.navigate(
        'App',
        {},
        NavigationActions.navigate({ routeName: 'Main' })
      );
      saveLocalUser(response.data.token);
      handleLoading(false, '');
    } catch (err) {
      handleLoading(false, '');
      if (err.response) handleWarning(true, err.response.data.message);
      console.log('Erro login', err || err.response);
    }
  };

  // ----------------RENDER-------------------------
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        contentContainerStyle={{ flex: 1 }}
        enabled={true}
        keyboardVerticalOffset={-24}
        behavior={'position'}
        style={{ flex: 1 }}
      >
        {/* HEADER */}

        <View style={styles.containerHeader}>
          <Image style={styles.loginPicture} source={loginPicture} />
          <View style={styles.imageFilter} />
          <View style={styles.triangleCorner} />
          <View style={styles.containerTitle}>
            <Image style={styles.logo} source={logo} resizeMode={'contain'} />
            <Text style={styles.titleText}>NATOUR</Text>
          </View>
        </View>

        {/* BODY */}
        <View style={styles.containerBody}>
          <View style={styles.containerFill}>
            <FillField
              field="EMAIL"
              type="email"
              onChangeTextInput={val => setEmail(val)}
              setNext={() => {
                if (!password) setPasswordFocus(true);
                if (password) handleLogin();
              }}
              resetNextFocus={handleResetNextFocus}
              focus={emailFocus}
            />

            <FillField
              marginTop={10}
              field="PASSWORD"
              type="password"
              onChangeTextInput={val => setPassword(val)}
              setNext={() => {
                if (!email) setEmailFocus(true);
                if (email) handleLogin();
              }}
              resetNextFocus={handleResetNextFocus}
              focus={passwordFocus}
            />
          </View>

          <View style={styles.containerButtons}>
            <Button text="LOGIN" callBack={() => handleLogin()} />

            <View style={styles.containerForgot}>
              <TextButton
                text="Forgot my password"
                callBack={() => {
                  navigation.dispatch(loginScreenDefault);
                  navigation.navigate('Forgot');
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.containerNewUser}
              onPress={() => {
                navigation.dispatch(loginScreenDefault);
                navigation.navigate('NewUser');
              }}
            >
              <Text style={styles.clickHereText}>Click here to create a </Text>
              <Text style={styles.newUserText}>NEW ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

LoginScreen.navigationOptions = {
  headerShown: false
};

export default LoginScreen;

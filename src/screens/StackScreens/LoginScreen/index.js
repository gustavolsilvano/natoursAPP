import React, { useState, useContext, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
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

import { StackActions, NavigationActions } from 'react-navigation';

const LoginScreen = ({ navigation }) => {
  // Navigation

  const homeScreenDefault = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Main' })]
  });

  // Ref
  const fieldsRef = useRef(null);
  // Context

  const handleLoading = useContext(LoadingContext);

  const { user, setUser } = useContext(UserContext);

  const handleWarning = useContext(MessageContext);

  // Defining states

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  // Defining functions

  const handleResetNextFocus = () => {
    setPasswordFocus(false);
    setEmailFocus(false);
  };

  const handleLogin = async () => {
    handleLoading(true, 'Loading...');
    const user = { email, password };
    try {
      const response = await server.post('/api/v1/users/login', user);
      setUser({ ...response.data.data.user, token: response.data.token });
      navigation.dispatch(homeScreenDefault);
      handleLoading(false, '');
    } catch (err) {
      handleLoading(false, '');
      handleWarning(true, err.response.data.message);
      console.log('Erro no login', err.response);
    }
    //
  };

  // useEffect(() => {
  //   retrieveRememberUser();
  // }, []);

  // const retrieveRememberUser = async () => {
  //   try {
  //     const userPreParse = await AsyncStorage.getItem('userToken');
  //     const userToken = JSON.parse(userPreParse);
  //     if (!userToken) return;
  //     handleLogin(userToken);
  //   } catch (err) {
  //     return;
  //   }
  // };

  // ----------------RENDER-------------------------
  return (
    <KeyboardAvoidingView
      enabled={true}
      style={{ flex: 1 }}
      behavior={'position'}
      keyboardVerticalOffset={-24}
    >
      <Image style={styles.loginPicture} source={loginPicture} />
      <View style={styles.imageFilter} />
      <View style={styles.triangleCorner} />
      <View style={styles.bottomShape} />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.containerTitle}>
            <Image style={styles.logo} source={logo} resizeMode={'contain'} />
            <Text style={styles.titleText}>NATOUR</Text>
          </View>
        </View>

        <View style={styles.containerFields} ref={fieldsRef}>
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
  );
};

LoginScreen.navigationOptions = {
  headerShown: false
};

export default LoginScreen;

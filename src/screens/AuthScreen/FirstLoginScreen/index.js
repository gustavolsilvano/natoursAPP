import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native';
import FillField from '../../../components/FillField';
import Button from '../../../components/Button';
import { LinearGradient } from 'expo-linear-gradient';
import { logo } from '../../../constant/constant';
import { saveLocalUser } from '../../../functions/handleLocalUser';

import server from '../../../api/server';

import LoadingContext from '../../../context/LoadingContext';
import UserContext from '../../../context/UserContext';
import MessageContext from '../../../context/MessageContext';

import { NavigationActions } from 'react-navigation';
import styles from './style';

const FisrtLoginScreen = ({ navigation }) => {
  // CONTEXT

  const handleLoading = useContext(LoadingContext);
  const { currentUser: user, setCurrentUser } = useContext(UserContext);
  const handleWarning = useContext(MessageContext);

  // STATE
  const [code, setCode] = useState(null);

  // FUNCTIONS
  const handleSubmit = async () => {
    try {
      handleLoading(true, 'Loading...');
      const response = await server.patch(`/api/v1/users/checkEmail/${code}`);
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        contentContainerStyle={{ flex: 1 }}
        enabled={true}
        keyboardVerticalOffset={-24}
        behavior={'position'}
        style={{ flex: 1 }}
      >
        <LinearGradient
          colors={['rgba(119,204,113,1)', 'rgba(76,193,152,1)']}
          start={[1, 1]}
          end={[1, 0]}
          style={styles.container}
        >
          <View style={styles.containerLogo}>
            <Image source={logo} style={styles.logo} resizeMode={'contain'} />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.title}>WELCOME TO NATOURS!</Text>
            <Text style={styles.subTitle}>
              PLEASE INSERT BELOW YOUR 6 DIGIT CODE THAT WAS SENT TO YOUR EMAIL
            </Text>
          </View>

          <View style={styles.containerBottom}>
            <FillField
              type="fullname"
              field="Email Code"
              styleTextInput={styles.textInput}
              styleContainer={styles.containerTextInput}
              styleText={styles.textTextInput}
              onChangeTextInput={val => setCode(val)}
              setNext={handleSubmit}
            />
            <Button text="SUBMIT" callBack={handleSubmit} />
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FisrtLoginScreen;

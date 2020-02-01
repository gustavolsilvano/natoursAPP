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

import server from '../../../api/server';

import LoadingContext from '../../../context/LoadingContext';
import MessageContext from '../../../context/MessageContext';

import styles from './style';

const ForgotPasswordScreen = ({ navigation }) => {
  // CONTEXT
  const handleLoading = useContext(LoadingContext);
  const handleWarning = useContext(MessageContext);

  // STATE
  const [email, setEmail] = useState(null);

  // FUNCTIONS
  const handleSubmit = async () => {
    try {
      handleLoading(true, 'Loading...');
      await server.post(`/api/v1/users/forgotPassword`, { email });
      navigation.pop();
      handleWarning(true, 'Email with temporary password sent successfully');
      handleLoading(false, '');
    } catch (err) {
      handleLoading(false, '');
      if (err.response) handleWarning(true, err.response.data.message);
      console.log('Erro forgeting password', err || err.response);
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
            <Text style={styles.title}>FORGOT YOUR PASSWORD?</Text>
            <Text style={styles.subTitle}>
              INSERT BELOW YOUR EMAIL ACCOUNT. WE'LL RESET YOUR PASSWORD AND
              SEND TO YOUR EMAIL A TEMPORARY ONE.
            </Text>
          </View>

          <View style={styles.containerBottom}>
            <FillField
              type="email"
              field="Email "
              styleTextInput={styles.textInput}
              styleContainer={styles.containerTextInput}
              styleText={styles.textTextInput}
              onChangeTextInput={val => setEmail(val)}
              setNext={handleSubmit}
            />
            <Button text="SUBMIT" callBack={handleSubmit} />
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

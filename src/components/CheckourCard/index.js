import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native';
import Button from '../Button';
import FillField from '../../components/FillField';

import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './style';
import { firstColor_minor, firstColor_major } from '../../constant/constant';

const CheckoutCard = ({ tour, yesCallback, noCallback, closeCallback }) => {
  // STATE
  const [cardName, setCardName] = useState('abc');
  const [cardNumber, setCardNumber] = useState('4111111111111111');
  const [cvv, setCvv] = useState('123');
  const [cardExpiration, setCardExpiration] = useState('1225');

  const [cardNameFocus, setCardNameFocus] = useState(false);
  const [cardNumberFocus, setCardNumberFocus] = useState(false);
  const [cvvFocus, setCvvFocus] = useState(false);
  const [cardExpirationFocus, setCardExpirationFocus] = useState(false);

  // FUNCTION
  const handleResetNextFocus = () => {
    setCardNameFocus(false);
    setCardNumberFocus(false);
    setCvvFocus(false);
    setCardExpirationFocus(false);
  };

  return (
    <SafeAreaView style={styles.overall}>
      <KeyboardAvoidingView
        contentContainerStyle={{ flex: 1 }}
        enabled={true}
        keyboardVerticalOffset={-100}
        behavior={'position'}
        style={{ flex: 1 }}
      >
        <LinearGradient
          colors={[firstColor_major, firstColor_minor]}
          start={[0, 0]}
          end={[0, 1.4]}
          style={styles.container}
        >
          <Text>{`Tour: ${tour.name}`}</Text>
          <FillField
            field="Card Number"
            textType="creditCardNumber"
            type="number"
            styleText={styles.cardNumberInput}
            styleContainer={styles.containerFillField}
            styleTextInput={styles.inputTextFillField}
            onChangeTextInput={val => setCardNumber(val)}
            setNext={() => {
              if (!cvv) return setCvvFocus(true);
              if (!cardName) return setCardNameFocus(true);
              if (!cardExpiration) return setCardExpirationFocus(true);
              if (cvv && cardName && cardExpiration) return yesCallback();
            }}
            resetNextFocus={handleResetNextFocus}
            focus={cardNumberFocus}
          />
          <FillField
            field="CVV"
            type="number"
            styleText={styles.cardNumberInput}
            styleContainer={styles.containerFillField}
            styleTextInput={styles.inputTextFillField}
            onChangeTextInput={val => setCvv(val)}
            setNext={() => {
              if (!cardName) return setCardNameFocus(true);
              if (!cardNumber) return setCardNumberFocus(true);
              if (!cardExpiration) return setCardExpirationFocus(true);
              if (cardName && cardNumber && cardExpiration)
                return yesCallback();
            }}
            resetNextFocus={handleResetNextFocus}
            focus={cvvFocus}
          />
          <FillField
            field="Card Name"
            type="fullname"
            styleText={styles.cardNumberInput}
            styleContainer={styles.containerFillField}
            styleTextInput={styles.inputTextFillField}
            onChangeTextInput={val => setCardName(val)}
            setNext={() => {
              if (!cvv) return setCvvFocus(true);
              if (!cardNumber) return setCardNumberFocus(true);
              if (!cardExpiration) return setCardExpirationFocus(true);
              if (cvv && cardNumber && cardExpiration) return yesCallback();
            }}
            resetNextFocus={handleResetNextFocus}
            focus={cardNameFocus}
          />
          <FillField
            field="Card Expiration"
            type="number"
            styleText={styles.cardNumberInput}
            styleContainer={styles.containerFillField}
            styleTextInput={styles.inputTextFillField}
            onChangeTextInput={val => setCardExpiration(val)}
            setNext={() => {
              if (!cvv) return setCvvFocus(true);
              if (!cardName) return setCardNameFocus(true);
              if (!cardNumber) return setCardNumberFocus(true);
              if (cvv && cardName && cardNumber)
                return yesCallback(cardName, cardNumber, cardExpiration, cvv);
            }}
            resetNextFocus={handleResetNextFocus}
            focus={cardExpirationFocus}
          />
          <TouchableOpacity
            style={styles.containerIconClose}
            onPress={closeCallback}
          >
            <Feather name="x" style={styles.iconClose} />
          </TouchableOpacity>
          <Button
            text="Confirm"
            callBack={() =>
              yesCallback(cardName, cardNumber, cardExpiration, cvv)
            }
          />
          <Button text="Back" style={styles.noButton} callBack={noCallback} />
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CheckoutCard;

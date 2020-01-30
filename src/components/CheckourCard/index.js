import React, { useContext, useState, useRef } from 'react';
import { Text, KeyboardAvoidingView, SafeAreaView, View } from 'react-native';
import Button from '../Button';
import { CreditCardInput } from 'react-native-credit-card-input';
import MessageContext from '../../context/MessageContext';

import { LinearGradient } from 'expo-linear-gradient';

import styles from './style';
import {
  firstColor_minor,
  firstColor_major,
  height
} from '../../constant/constant';

const CheckoutCard = ({ tour, yesCallback, noCallback }) => {
  // REF

  const cardRef = useRef(null);
  // CONTEXT
  const handleMessage = useContext(MessageContext);

  // FUNCTION

  const handleSubmit = () => {
    if (!cardRef.current.valid) {
      return handleMessage(true, 'Card invalid. Please check your inputs.');
    }
    yesCallback(
      cardRef.current.cardName,
      cardRef.current.cardNumber,
      cardRef.current.cardExpiration,
      cardRef.current.cvv
    );
    return;
  };
  const handleCardValue = form => {
    cardRef.current = {
      cardName: form.values.name,
      cardNumber: form.values.number,
      cardExpiration: form.values.expiry,
      cvv: form.values.cvc,
      valid: form.valid
    };
  };

  return (
    <SafeAreaView style={styles.overall}>
      <KeyboardAvoidingView
        contentContainerStyle={{ flex: 1 }}
        enabled={true}
        keyboardVerticalOffset={Math.round(-height / 2)}
        behavior={'position'}
        style={{ flex: 1 }}
      >
        <View stye={styles.containerTourName}>
          <Text style={styles.tourName}>{`${tour.name}`}</Text>
        </View>
        <View style={styles.containerButton}>
          <Button
            text={`Confirm`}
            style={styles.button}
            callBack={() => handleSubmit()}
          />
          <Button text="Back" style={styles.noButton} callBack={noCallback} />
        </View>
        <LinearGradient
          colors={[firstColor_major, firstColor_minor]}
          start={[0, 0]}
          end={[0, 1.4]}
          style={styles.container}
        >
          <View style={{ height: 100 }} />
          <CreditCardInput
            onChange={handleCardValue}
            requiresName={true}
            allowScroll={true}
            inputStyle={styles.creditCard}
          />
          <View style={styles.containerPrice}>
            <Text style={styles.textTour}> {`TOTAL: `}</Text>
            <Text style={styles.textPrice}> {`R$${tour.price}`}</Text>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CheckoutCard;

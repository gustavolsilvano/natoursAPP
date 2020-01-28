import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { textColor, firstColor, cardTextColor_2 } from '../constant/constant';

const FillField = ({
  field,
  marginTop,
  type,
  onChangeTextInput,
  focus,
  setNext,
  resetNextFocus,
  initialValue,
  placeholderValue,
  styleText,
  styleTextInput,
  styleContainer,
  textType
}) => {
  // Configurando configuração inicial
  const initialConfig = () => {
    const defaultConfig = {
      capitalize: 'sentences',
      secure: false,
      keyboardType: 'default'
    };

    if (type === 'email')
      return {
        ...defaultConfig,
        capitalize: 'none',
        keyboardType: 'email-address'
      };
    if (type === 'password')
      return { ...defaultConfig, secure: true, capitalize: 'none' };
    if (type === 'fullname') return { ...defaultConfig, capitalize: 'words' };
    if (type === 'number')
      return { ...defaultConfig, keyboardType: 'number-pad' };
  };

  const [inputValue, setInputValue] = useState(initialValue);
  const [config, setConfig] = useState(initialConfig());

  const inputRef = useRef();

  if (focus) {
    inputRef.current.focus();
    resetNextFocus();
  }

  const inputHandle = text => {
    setInputValue(text);
    onChangeTextInput(text);
  };

  const handleSubmit = () => {
    setNext();
  };

  return (
    <View style={[styles.container, { marginTop }, styleContainer]}>
      <Text style={[styles.text, styleText]}>{field}</Text>
      <TextInput
        textContentType={textType}
        keyboardType={config.keyboardType}
        autoCapitalize={config.capitalize}
        ref={inputRef}
        value={inputValue}
        blurOnSubmit={false}
        onChangeText={text => inputHandle(text)}
        onSubmitEditing={handleSubmit}
        secureTextEntry={config.secure}
        style={[styles.textInput, styleTextInput]}
        placeholder={placeholderValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  text: {
    fontSize: 18,
    color: cardTextColor_2
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: firstColor,
    color: textColor
  }
});

export default FillField;

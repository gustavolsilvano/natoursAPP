import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { textColor } from '../constant/constant';

const FillField = ({
  field,
  marginTop,
  type,
  onChangeTextInput,
  focus,
  setNext,
  resetNextFocus,
  initialValue
}) => {
  // Configurando configuração inicial
  const initialConfig = () => {
    defaultConfig = {
      capitalize: 'sentences',
      secure: false
    };

    if (type === 'email') return { ...defaultConfig, capitalize: 'none' };
    if (type === 'password')
      return { ...defaultConfig, secure: true, capitalize: 'none' };
    if (type === 'fullname') return { ...defaultConfig, capitalize: 'words' };
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
    <View style={[styles.container, { marginTop }]}>
      <Text style={styles.text}>{field}</Text>
      <TextInput
        autoCapitalize={config.capitalize}
        ref={inputRef}
        value={inputValue}
        blurOnSubmit={false}
        onChangeText={text => inputHandle(text)}
        onSubmitEditing={handleSubmit}
        secureTextEntry={config.secure}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%'
  },
  text: {
    fontSize: 18,
    color: textColor
  },
  textInput: {
    borderBottomWidth: 2,
    color: textColor
  }
});

export default FillField;

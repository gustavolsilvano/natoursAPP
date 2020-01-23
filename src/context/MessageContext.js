import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FloatingWarning from '../components/FloatingWarning';

const MessageContext = React.createContext();

export const MessageProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  // handleWarning(true, 'Login realizado com sucesso')
  const handleWarning = (isShow, msg) => {
    setShow(isShow);
    setText(msg);
  };
  return (
    <MessageContext.Provider value={handleWarning}>
      <View style={styles.container}>
        <FloatingWarning
          show={show}
          text={text}
          effectEnded={() => setShow(false)}
        />
        {children}
      </View>
    </MessageContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    zIndex: 100
  }
});

export default MessageContext;

import React, { useRef, useState, useContext } from 'react';
import { FlatList, Keyboard, SafeAreaView } from 'react-native';

import NewUserContext from '../../../../context/newUserContext';

import FillField from '../../../../components/FillField';

import { height } from '../../../../constant/constant';

import styles from './style';
import { fillsAdress as fills } from '../src/fills';
import useKeyboardShow from '../../../../hooks/useKeyboardShow';

const AdressScreen = () => {
  // REF
  const focusReseted = useRef(true);

  // CONTEXT
  const { newUser, setNewUser } = useContext(NewUserContext);

  //STATE
  let initialFocus = {};
  const [focus, setFocus] = useState(() => {
    fills.forEach(elFill => {
      initialFocus[elFill.field] = false;
    });
    return initialFocus;
  });
  const [marginLast, setMarginLast] = useState(null);

  // FUNCTION
  const updateUser = (field, val) => {
    if (val === 'delete') {
      const update = { ...newUser };
      delete update[field];
      setNewUser(update);
      return;
    }
    const update = { ...newUser };
    update[field] = val;
    setNewUser(update);
  };

  const adjustInput = (field, val) => {
    if (field === 'ZIP CODE') {
      if (val.length === 5) {
        val = `${val}-`;
      }
      if (val.length > 9) {
        val = val.slice(0, 9);
      }
      return val;
    }
  };

  const handleUser = (field, val) => {
    const response = adjustInput(field, val);
    if (response) val = response;
    if (!focusReseted.current) {
      setFocus({});
      focusReseted.current = true;
    }
    if (!val) return updateUser(field, 'delete');
    updateUser(field, val);
  };
  const setNextFocus = field => {
    const updateFocus = { ...focus };
    updateFocus[field] = true;
    setFocus(updateFocus);
  };

  const handleNext = value => {
    for (let i = 0; i < fills.length; i++) {
      if (!value) return Keyboard.dismiss();
      if (!newUser.hasOwnProperty(fills[i].field)) {
        setNextFocus(fills[i].field);
        focusReseted.current = false;
        return;
      }
    }
    Keyboard.dismiss();
  };
  const show = () => {
    setMarginLast(height / 2);
  };
  const hide = () => {
    setMarginLast(0);
  };
  useKeyboardShow(show, hide);

  return (
    <SafeAreaView style={styles.subContainer}>
      <FlatList
        data={fills}
        keyExtractor={item => item.field}
        renderItem={prop => {
          const item = prop.item;
          return (
            <FillField
              field={item.field}
              type={item.type}
              value={newUser[item.field]}
              styleContainer={[
                item.styleContainer,
                item.field === 'ZIP CODE' ? { marginBottom: marginLast } : null
              ]}
              onChangeTextInput={val => handleUser(item.field, val)}
              setNext={() => handleNext(fills)}
              focus={focus[item.field]}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default AdressScreen;

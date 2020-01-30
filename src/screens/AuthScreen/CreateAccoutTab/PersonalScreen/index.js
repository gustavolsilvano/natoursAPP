import React, { useState, useContext, useRef, useEffect } from 'react';
import { FlatList, Keyboard, SafeAreaView } from 'react-native';

import NewUserContext from '../../../../context/newUserContext';

import FillField from '../../../../components/FillField';

import { height } from '../../../../constant/constant';

import styles from './style';
import { fills } from '../src/fills';
import useKeyboardShow from '../../../../hooks/useKeyboardShow';

const PersonalScreen = () => {
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
    if (field === 'BIRTHDAY') {
      if (val.length === 2) {
        val = `${val}/`;
      }
      if (val.length === 5) {
        const res = val.split('/');
        val = `${res[0]}/${res[1]}/`;
      }
      if (val.length > 10) {
        val = val.slice(0, 10);
      }
      return val;
    }
    if (field === 'CPF NUMBER') {
      if (val.length === 3) {
        val = `${val}.`;
      }
      if (val.length === 7) {
        const res = val.split('.');
        val = `${res[0]}.${res[1]}.`;
      }

      if (val.length === 11) {
        const res = val.split('.');
        val = `${res[0]}.${res[1]}.${res[2]}-`;
      }

      if (val.length > 14) {
        val = val.slice(0, 14);
      }
      return val;
    }
    if (field === 'PHONE NUMBER') {
      const result = val.substring(val.indexOf('(') + 1, val.indexOf(')'));
      if (val.length === 2 && !result) {
        val = `(${val}) `;
      }
      if (val.length > 3 && val[0] === '(' && val[3] !== ')') {
        const splitVal = val.split('(');
        const val1 = splitVal[1].slice(0, 2);
        const val2 = splitVal[1].slice(3, splitVal[1].length);
        val = `(${val1}) ${val2}`;
      }
      if (val.length === 10) {
        val = `${val}-`;
      }

      if (val.length > 15) {
        val = val.slice(0, 15);
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
    setMarginLast(height / 3);
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
              value={newUser[item.field]}
              type={item.type}
              styleContainer={[
                item.styleContainer,
                item.field === 'BIRTHDAY' ? { marginBottom: marginLast } : null
              ]}
              onChangeTextInput={val => handleUser(item.field, val)}
              setNext={handleNext}
              focus={focus[item.field]}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default PersonalScreen;

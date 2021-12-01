import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({
  placeholder,
  handleInputChange,
  value,
  TypePassword = false,
}) => {
  return (
    <TextInput
      style={styles.inputStyle}
      placeholder={placeholder}
      secureTextEntry={TypePassword}
      onChangeText={handleInputChange}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
  },
});

export default Input;

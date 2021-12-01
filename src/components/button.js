import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {primaryColor} from '../theme/index';

const Button = ({text, handleOnPress}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={handleOnPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: primaryColor,
  },
});

export default Button;

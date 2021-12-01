import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './styles';

const HomeScreen = () => {
  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </>
  );
};

export default HomeScreen;

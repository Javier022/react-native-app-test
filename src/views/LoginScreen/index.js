import React, {useState} from 'react';
import {View, Image, Alert} from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';
import {styles} from './styles';

const LoginScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSumbit = () => {
    if (!user.trim() || !password.trim()) {
      return Alert.alert('field is required');
    }

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
      </View>
      <View>
        <Input
          placeholder="user"
          value={user}
          handleInputChange={text => setUser(text)}
        />
        <Input
          placeholder="password"
          value={password}
          handleInputChange={text => setPassword(text)}
          TypePassword={true}
        />
      </View>
      <Button text="Sign In" handleOnPress={handleSumbit} />
    </View>
  );
};

export default LoginScreen;

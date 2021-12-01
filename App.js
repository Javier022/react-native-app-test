import React from 'react';
import {SafeAreaView} from 'react-native';
import Routes from './src/routes/index';

const App = () => {
  console.log('se ejecuto');
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;

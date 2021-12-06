/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      <StatusBar  />
      <Text style={{ textAlign: 'center', color: '#000' }}>New App</Text>
    </SafeAreaView>
  );
};

export default App;

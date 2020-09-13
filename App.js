import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {decode, encode} from 'base-64'
import AuthStack from './src/navigation/AppNavigator';
import store from './src/redux/store'
import { Provider } from 'react-redux'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

console.disableYellowBox = true;

export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
    </Provider>
  );
}
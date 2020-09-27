import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {decode, encode} from 'base-64'
import AuthStack from './src/navigation/AppNavigator';
import store from './src/redux/store'
import { Provider } from 'react-redux'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

console.disableYellowBox = true;

export default function App() {

  useEffect(() => {
    this.getPushNotificationPermissions();
  });

  getPushNotificationPermissions = async () => {
    
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    
    console.log(finalStatus)
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }
    console.log(finalStatus)

    // Get the token that uniquely identifies this device
    console.log("Notification Token: ", await Notifications.getExpoPushTokenAsync());
  }
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
    </Provider>
  );
}
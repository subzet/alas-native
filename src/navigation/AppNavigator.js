import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegistrationScreen } from '../screens/';
import MainTabNavigator from './MainTabNavigator';

const AuthNavigator = createStackNavigator();

export default function AuthStack(){
  return(
    <AuthNavigator.Navigator screenOptions={{headerShown: false}}>
      <AuthNavigator.Screen name='Login' component={LoginScreen}/>
      <AuthNavigator.Screen name='Registration' component={RegistrationScreen}/>
      <AuthNavigator.Screen name='Home' component={MainTabNavigator}/>
    </AuthNavigator.Navigator>
  )
}


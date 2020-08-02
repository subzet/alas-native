import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, InvestmentScreen, SettingsScreen } from '../screens';

const HomeStack = createStackNavigator();

export function HomeStackNavigator(){
  return(
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen}/>
    </HomeStack.Navigator>
  )
}

const InvestmentStack = createStackNavigator();

export function InvestmentStackNavigator(){
  return(
    <InvestmentStack.Navigator screenOptions={{headerShown: false}}>
      <InvestmentStack.Screen name="Investment" component={InvestmentScreen}/>
    </InvestmentStack.Navigator>
  )
}

const SettingsStack = createStackNavigator();

const settingsScreenStyles = {
  title: 'Configuración',
  headerStyle: {
    backgroundColor: 'white'
  },
  headerLeft: null
}

export function SettingsStackNavigator(){
  return(
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" options={settingsScreenStyles} component={SettingsScreen}/>
    </SettingsStack.Navigator>
  )
}




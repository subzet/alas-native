import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, InvestmentScreen, SettingsScreen, ProfileScreen, DetailScreen } from '../screens';
import { PaymentStackNavigator } from './PaymentStack'
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator();

export function HomeStackNavigator(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <HomeStack.Screen name='Pagar' component={PaymentStackNavigator}/>
      <HomeStack.Screen name='Detalle' component={DetailScreen}/>
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

const profileScreenStyles = {
  title: 'Perfil',
  headerStyle: {
    backgroundColor: Colors.backgroundMainColor,
    color: Colors.backgroundSecondaryColor
  },
  headerTintColor:'#fff'
}

export function SettingsStackNavigator(){
  return(
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" options={settingsScreenStyles} component={SettingsScreen}/>
      <SettingsStack.Screen name="Perfil"  options={profileScreenStyles} component={ProfileScreen}/>
    </SettingsStack.Navigator>
  )
}




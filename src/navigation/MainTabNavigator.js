import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator, InvestmentStackNavigator, SettingsStackNavigator }from './MainStacks';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';


const MainTab = createBottomTabNavigator();

export default function  MainTabNavigator({navigation}){
    return(
    <MainTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-wallet';
            } else if (route.name === 'Investment') {
              iconName = 'ios-podium';
            } else if (route.name === 'Settings') {
                iconName = 'ios-cog';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.backgroundMainColor,
          inactiveTintColor: 'gray',
        }}
      >
            <MainTab.Screen name='Home' component={HomeStackNavigator}/>
            <MainTab.Screen name='Investment' component={InvestmentStackNavigator}/>
            <MainTab.Screen name='Settings' component={SettingsStackNavigator}/>
        </MainTab.Navigator>
    )
}
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { WithdrawAmount, PaymentConfirm,  PaymentStatus } from '../screens';
import Colors from '../constants/Colors';

const WithdrawStack = createStackNavigator();

const investmentStackOptions = {
  headerStyle: {
    backgroundColor: Colors.backgroundMainColor,
    color: Colors.backgroundSecondaryColor
  },
  headerTintColor:'#fff'
}

const statusStackOptions = {
  headerShown: false
}

export function WithdrawStackNavigator(){
    return(
      <WithdrawStack.Navigator>
        <WithdrawStack.Screen name="Retirar dinero" component={WithdrawAmount} options={investmentStackOptions}/>
        <WithdrawStack.Screen name="Confirmar" component={PaymentConfirm} options={investmentStackOptions}/>
        <WithdrawStack.Screen name="Estado" component={PaymentStatus} options={statusStackOptions}/>
      </WithdrawStack.Navigator>
    )
  }

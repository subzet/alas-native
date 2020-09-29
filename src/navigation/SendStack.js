import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PaymentAmount, PaymentConfirm,  PaymentStatus, EthAddress } from '../screens';
import Colors from '../constants/Colors';

const SendStack = createStackNavigator();

const sendStackOptions = {
  headerStyle: {
    backgroundColor: Colors.backgroundMainColor,
    color: Colors.backgroundSecondaryColor
  },
  headerTintColor:'#fff'
}

const statusStackOptions = {
  headerShown: false
}

export function SendStackNavigator(){
    return(
      <SendStack.Navigator>
        <SendStack.Screen name="Ingresar dirección" component={EthAddress} options={statusStackOptions}/>
        <SendStack.Screen name="Ingresar Monto" component={PaymentAmount} options={statusStackOptions}/>
        <SendStack.Screen name="Confirmar" component={PaymentConfirm} options={statusStackOptions}/>
        <SendStack.Screen name="Estado" component={PaymentStatus} options={statusStackOptions}/>
      </SendStack.Navigator>
    )
  }

  //
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PaymentQR, PaymentAmount, PaymentConfirm,  PaymentStatus } from '../screens';

const PaymentStack = createStackNavigator();

export function PaymentStackNavigator(){
    return(
      <PaymentStack.Navigator>
        <PaymentStack.Screen name="Escanear QR" component={PaymentQR}/>
        <PaymentStack.Screen name="Ingresar Monto" component={PaymentAmount}/>
        <PaymentStack.Screen name="Confirmar" component={PaymentConfirm}/>
        <PaymentStack.Screen name="Estado" component={PaymentStatus}/>
      </PaymentStack.Navigator>
    )
  }
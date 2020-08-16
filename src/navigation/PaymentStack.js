import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PaymentQR, PaymentAmount, PaymentConfirm,  PaymentStatus } from '../screens';
import Colors from '../constants/Colors';

const PaymentStack = createStackNavigator();

const paymentStackOptions = {
  headerStyle: {
    backgroundColor: Colors.backgroundMainColor,
    color: Colors.backgroundSecondaryColor
  },
  headerTintColor:'#fff'
}

const statusStackOptions = {
  headerShown: false
}

export function PaymentStackNavigator(){
    return(
      <PaymentStack.Navigator>
        <PaymentStack.Screen name="Escanear QR" component={PaymentQR} options={paymentStackOptions}/>
        <PaymentStack.Screen name="Ingresar Monto" component={PaymentAmount} options={paymentStackOptions}/>
        <PaymentStack.Screen name="Confirmar" component={PaymentConfirm} options={paymentStackOptions}/>
        <PaymentStack.Screen name="Estado" component={PaymentStatus} options={statusStackOptions}/>
      </PaymentStack.Navigator>
    )
  }

  //
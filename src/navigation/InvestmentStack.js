import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { InvestmentProvidersScreen, PaymentAmount, PaymentConfirm,  PaymentStatus } from '../screens';
import Colors from '../constants/Colors';

const InvestmentStack = createStackNavigator();

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

export function InvestmentFlowStackNavigator(){
    return(
      <InvestmentStack.Navigator>
        <InvestmentStack.Screen name="Elegir proveedor" component={InvestmentProvidersScreen} options={investmentStackOptions}/>
        <InvestmentStack.Screen name="Ingresar Monto" component={PaymentAmount} options={investmentStackOptions}/>
        <InvestmentStack.Screen name="Confirmar" component={PaymentConfirm} options={investmentStackOptions}/>
        <InvestmentStack.Screen name="Estado" component={PaymentStatus} options={statusStackOptions}/>
      </InvestmentStack.Navigator>
    )
  }

import React, { useContext, useState } from 'react'
import { Animated, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { useSelector } from 'react-redux'
import { AuthContext } from '../../utils/authContext'
import { getDaiValue } from '../../api/api';


export default function WithdrawAmount({navigation,route}) {
    const {user} = useContext(AuthContext)
    const [amount, setAmount] = useState('')
    const withdrawalData = useSelector(state => state.withdrawal)
    

    const Wording = () => {
        if(withdrawalData.flow === 'investment')
            return <Text style={styles.paymentWording}>Ingresa el monto a retirar de {withdrawalData.payload.protocol} en {user.userHome.userLC}</Text>
    }

   async function onContinuePress(){
        let amountConverted = validateAmount()
        let convertRate = await getDaiValue(user.token)
        let amountDai = amountConverted / convertRate
        if(amountConverted > 0){
            navigation.navigate('Confirmar', {
                data:{
                    amountLC: amountConverted,
                    amountDAI: amountDai,
                    qrData: undefined,
                    investData: undefined,
                    sendData: undefined,
                    withdraw: withdrawalData
                }
            })
        }
    }

    const validateAmount = () =>{
        let amountConverted = parseFloat(amount)
        
        if(amountConverted <= 0 || Number.isNaN(amountConverted) ){
            alert("El monto no es válido!")
            setAmount('')
            return -1
        }

        return amountConverted
    }

    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
            <View style={styles.inputSection}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>$</Text>
                    <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            value={amount}
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => setAmount(text)}
                            autoCapitalize="none"
                    />
                </View>
                <View style={styles.sectionTitleUnderline}/>
            </View>
            <Wording/>
            <AnimatedTouchable
                        style={styles.button}
                        onPress={onContinuePress}>
                        <Text style={styles.buttonTitle}>Continuar</Text>
            </AnimatedTouchable>
            </KeyboardAwareScrollView>
        </View>
    )
}
import React, { useContext, useState } from 'react'
import { Animated, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { AuthContext } from '../../utils/authContext'
import { getDaiValue } from '../../api/api';


export default function PaymentAmount({navigation,route}) {
    const user = useContext(AuthContext)
    const [amount, setAmount] = useState('')
    
    // const qrData = {
    //     shop:"uade",
    //     cbu:"3220001823000055910025",
    //     alias_cvu:"BOCHA.ASTRO.NUEZ",
    //     lat:"-34.6178312",
    //     lon:"-58.381714"
    // }

    const { qrData } = route.params



   async function onContinuePress(){
        let amountConverted = validateAmount()
        let convertRate = await getDaiValue(user.token)
        let amountDai = amountConverted / convertRate
        if(amountConverted > 0){
            navigation.navigate('Confirmar', {
                data:{
                    amountLC: amountConverted,
                    amountDAI: amountDai.toFixed(3),
                    qrData: qrData
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
            <Text style={styles.paymentWording}>Ingresa el monto de pago en {user.userHome.userLC}</Text>
            <AnimatedTouchable
                        style={styles.button}
                        onPress={onContinuePress}>
                        <Text style={styles.buttonTitle}>Continuar</Text>
            </AnimatedTouchable>
            </KeyboardAwareScrollView>
        </View>
    )
}
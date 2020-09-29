import React, { useState } from 'react'
import { Animated, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import ethAddress from 'ethereum-address';


export default function EthAddress({navigation}) {
    const [address, setAddress] = useState('')

    const Wording = () => {
            return <Text style={styles.paymentWording}>Ingresa la dirección de destino</Text>
    }

   const onContinuePress = () => {
        if(validateAddress()){
            navigation.navigate('Ingresar Monto', {
                        qrData: undefined,
                        investData: undefined,
                        sendData: {flow:'sendMoney', address}
                })
            }
    }
    
    const validateAddress = () =>{    
        if(!ethAddress.isAddress(address)){
            alert("La dirección no es válida!")
            setAddress('')
            return false
        }

        return true
    }

    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
            <View style={styles.inputSection}>
                <View style={styles.inputContainer}>
                    
                    <TextInput
                            style={styles.input}
                            value={address}
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => setAddress(text)}
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
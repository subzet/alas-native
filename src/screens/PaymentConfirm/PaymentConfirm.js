import React, { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../utils/authContext'
import styles from './styles';
import { makePayment } from '../../api/api';


export default function PaymentConfirm({route, navigation}) {
    const {user} = useContext(AuthContext)

    const { data } = route.params

    async function onContinuePress(){
        console.log('todo')
        let payment = formatPaymentData(data)
        let response = await makePayment(user.token, payment)
        navigation.navigate('Estado', {
                data,
                response
        })
    }

    const formatPaymentData = (data) => {
        let payment = {}
        payment.type = 'payment'
        payment.amountLC = -data.amountLC
        payment.amountDAI = -data.amountDAI
        payment.userLC = 'ARS'
        payment.extra = {
            to: data.qrData.shop.toUpperCase()
        }
        
        return payment
    }

    const transformDAI = (daiAmount) =>{
        let dai = daiAmount
        return dai.toFixed(3)
    }


    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.mainText}> Vas a pagar: </Text>
                <Text style={styles.mainAmount}>{user.userHome.userLC + ' $' + data.amountLC} a {data.qrData.shop.toUpperCase()}</Text>
                <Text style={styles.secondaryAmount}>Se debitaran {'DAI ' + transformDAI(data.amountDAI)} de tu cuenta</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                            style={styles.button}
                            onPress={onContinuePress}>
                            <Text style={styles.buttonTitle}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
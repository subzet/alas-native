import React, { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../utils/authContext'
import styles from './styles';
import { makePayment } from '../../api/api';


export default function PaymentConfirm({route, navigation}) {
    const user = useContext(AuthContext)

    const { data } = route.params

    const onContinuePress = () => {
        console.log('todo')
        let response = makePayment(data)
        navigation.navigate('Estado', {
                data,
                response
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.mainText}> Vas a pagar: </Text>
                <Text style={styles.mainAmount}>{user.userHome.userLC + ' $' + data.amountLC} a {data.qrData.shop.toUpperCase()}</Text>
                <Text style={styles.secondaryAmount}>Se debitaran {'DAI ' + data.amountDAI} de tu cuenta</Text>
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
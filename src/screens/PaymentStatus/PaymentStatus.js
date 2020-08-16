import React, { useContext } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './styles';
import { AuthContext } from '../../utils/authContext'

export default function PaymentStatus({route, navigation}) {
    const { data } = route.params
    const { response } = route.params
    const user = useContext(AuthContext)

    const onGoBackPress = () => {
        navigation.navigate('Home');
    }

    const onTryAgainPress = () => {
        navigation.navigate('Ingresar Monto')
    }

    const Icon = ({status}) => {
        if(status == 200){
            return(
                <Image style={styles.statusIcon} source={require('../../../assets/action-success.png')}></Image>
            )
        }

        return(
            <Image style={styles.statusIcon} source={require('../../../assets/action-notsuccess.png')}></Image>
        )
    }

    const Wording = ({status}) => {
        if(status == 200){
            return(
            <>
                <Text style={styles.mainWording}>¡Listo! Pagaste a {data.qrData.shop}:</Text>
                <Text style={styles.mainWording}>{user.userHome.userLC + ' $' + data.amountLC}</Text>
                <Text style={styles.secondaryWording}>Se debitaron {'DAI ' + data.amountDAI} de tu cuenta</Text>
            </>
            )
        }

        return(
            <>
                <Text style={styles.mainWording}>¡Uups! No pudimos procesar tu pago!</Text>
            </>
        )
    }

    const Action = ({status}) => {
        if(status == 200){
            return(
            <TouchableOpacity
                style={styles.button}
                onPress={onGoBackPress}>
                <Text style={styles.buttonTitle}>Volver</Text>
            </TouchableOpacity>
            )
        }
        return(
            <TouchableOpacity
                onPress={onTryAgainPress}>
                <Text style={styles.secondaryWordingUnderline}>Intenta nuevamente.</Text>
            </TouchableOpacity>
            )
    }



    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Icon status={response.code}></Icon>
                <Wording status={response.code}></Wording>
            </View>
            <View style={styles.footer}>
                <Action status={response.code}></Action>
            </View>
        </View>
    )
}
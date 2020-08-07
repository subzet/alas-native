import React, { useContext } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import styles from './styles';

export default function PaymentStatus({navigation}) {
    return (
        <View styles={styles.container}>
            <Text styles={styles.text}> Hola mundo </Text>
        </View>
    )
}
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { AuthContext } from '../../utils/authContext'



export default function HomeScreen({navigation}) {
    const user = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text style={styles.testText}>{`Welcome ${user.userData.fullName}`}</Text>
        </View>
    )
}
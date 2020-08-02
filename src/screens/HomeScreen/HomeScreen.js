import React, { useContext } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { AuthContext } from '../../utils/authContext'



export default function HomeScreen({navigation}) {
    const user = useContext(AuthContext)
    const balanceLC = user.userHome.balanceLC
    const fullName = user.userData.fullName
    const balanceDAI = user.userHome.balanceDAI

    return (
        <View style={styles.container}>
            <View style={styles.statusContainer}>
                <View style={styles.statusBarContainer}>
                    <Text style={styles.sectionTitleText}>Status Bar</Text>
                </View>
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitleText}>Transacciones</Text>
                </View>
                <View style={styles.sectionTitleUnderline}/>
            </View>
            <View style={styles.transactionContainer}>
                <Text style={styles.testText}>{`Welcome ${user.userData.fullName}`}</Text>
            </View>
        </View>
    )
}
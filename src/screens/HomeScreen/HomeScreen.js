import React, { useContext } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { AuthContext } from '../../utils/authContext'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const formatDateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function HomeScreen({navigation}) {
    const user = useContext(AuthContext)

    const sendMoneyETH = () => {
        console.log('todo');
    }

    const investMoneyETH = () => {
        console.log('todo');
    }

    const pay = () => {
        console.log('todo');
    }

    const viewTransactionDetail = () => {
        console.log('todo');
    }

    const Transactions = ({transactions}) => (
            
            transactions.map(transaction => {
                return(
                    <>
                    <Text style={styles.transactionDate}>{(new Date(transaction.date)).toLocaleDateString('es-ES',formatDateOptions)}</Text>
                    <TouchableOpacity style={styles.transaction} onPress={viewTransactionDetail}>
                        <View style={styles.transactionImageContainer}><MaterialCommunityIcons name="bank" size={24} color="black" /></View>
                        <View style={styles.transactionDetailContainer}><Text styles={styles.transactionDetail}>{transaction.typeDesc}</Text></View>
                        <View style={styles.transactionAmountContainer}><Text styles={styles.transactionDetail}>{transaction.userLC + ' ' + transaction.amountLC}</Text></View>
                    </TouchableOpacity>
                    </>
                )
            })
    );
            
    

    return (
        <View style={styles.container}>
            <View style={styles.statusContainer}>
                <View style={styles.statusBarContainer}>
                    <Text style={styles.statusNickname}>{'@' + user.userData.nickName}</Text>
                    <Text style={styles.statusBalanceLC}>{user.userHome.userLC +' $'+ user.userHome.balanceLC}</Text>
                    <Text style={styles.statusBalanceDAI}>{user.userHome.balanceDAI + ' DAI'}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.tabButton} onPress={sendMoneyETH}><Text style={styles.tabButtonText}>Enviar</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.tabButton} onPress={investMoneyETH}><Text style={styles.tabButtonText}>Invertir</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.tabButton} onPress={pay}><Text style={styles.tabButtonText}>Pagar</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitleText}>Transacciones</Text>
                </View>
                <View style={styles.sectionTitleUnderline}/>
            </View>
            <View style={styles.transactionContainer}>
                <ScrollView>
                   <Transactions transactions={user.userHome.movements}/>
                </ScrollView>
            </View>
        </View>
    )
}
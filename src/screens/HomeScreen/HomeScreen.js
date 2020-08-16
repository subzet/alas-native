import React, { useContext } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import styles from './styles';
import { AuthContext } from '../../utils/authContext'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, FontAwesome5,Entypo } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


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
        navigation.navigate('Pagar')
    }

    const viewTransactionDetail = (transaction) => {
        navigation.navigate('Detalle',{
            tx: transaction
        })
    }

    const Icon = ({txType}) => {
        switch (txType){
            case 'payment': return (<FontAwesome5 name="store" size={40} color={Colors.notQuiteBlack} />)
            case 'investment': return(<Entypo name="line-graph" size={40} color={Colors.notQuiteBlack} />)
            case 'money-sent': return (<FontAwesome5 name="money-bill-wave" size={40} color={Colors.notQuiteBlack}/>)
            case 'bank-transfer': return (<MaterialCommunityIcons name="bank" size={40} color={Colors.notQuiteBlack} />)
        }
    }


    const Transactions = ({transactions}) => (
            
            transactions.map(transaction => {
                return(
                    <>
                    <Text style={styles.transactionDate}>{(new Date(transaction.date)).toLocaleDateString('es-ES',formatDateOptions)}</Text>
                    <TouchableOpacity style={styles.transaction} onPress={() => viewTransactionDetail(transaction)}>
                        <View style={styles.transactionImageContainer}><Icon txType={transaction.type}/></View>
                        <View style={styles.transactionDetailContainer}>
                            <View style={styles.transactionType}><Text styles={styles.transactionDetail}>{transaction.typeDesc}</Text></View>
                            <View style={styles.transactionAmountContainer}>
                                <View style={styles.transactionAmount}><Text styles={styles.transactionDetail}>{transaction.userLC + transaction.amountLC < 0 ? '- $' + (-transaction.amountLC) : ' $' + transaction.amountLC }</Text></View>
                                <View style={styles.transactionAmount}><Text styles={styles.transactionDetail}>{'DAI' + ' ' + transaction.amountDAI}</Text></View>
                            </View>
                        </View>
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
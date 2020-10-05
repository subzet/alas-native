import React, { useContext } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import styles from './styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5,Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import Colors from '../../constants/Colors';
import { newwithdrawal } from '../../redux/alasApp'


const formatDateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function HomeScreen({navigation}) {
    const mainScreen = useSelector(state => state.mainScreen)

    const distpatch = useDispatch()

    const newWithdrawal = data => distpatch(newwithdrawal(data))


    const sendMoneyETH = () => {
        navigation.navigate('Enviar')
    }

    const investMoneyETH = () => {
        navigation.navigate('Invertir')
    }

    const pay = () => {
        navigation.navigate('Pagar')
    }

    const viewTransactionDetail = (transaction) => {
        navigation.navigate('Detalle',{
            tx: transaction
        })
    }

    const withdraw = () => {
        newWithdrawal({flow:'account',payload:{}})
        navigation.navigate('Withdraw')
    }

    const userSettings = () => {
        navigation.navigate('Perfil')
    }

    const Icon = ({txType}) => {
        switch (txType){
            case 'payment': return (<FontAwesome5 name="store" size={40} color={Colors.notQuiteBlack} />)
            case 'money-transfer': return(<MaterialCommunityIcons name="bank" size={40} color={Colors.notQuiteBlack} />)
            case 'investment': return(<Entypo name="line-graph" size={40} color={Colors.notQuiteBlack} />)
            case 'money-sent': return (<FontAwesome5 name="money-bill-wave" size={40} color={Colors.notQuiteBlack}/>)
            case 'bank-transfer': return (<MaterialCommunityIcons name="bank" size={40} color={Colors.notQuiteBlack} />)
            case 'withdraw-from-investment': return(<MaterialIcons name="attach-money" size={40} color={Colors.notQuiteBlack} />)
            case 'withdraw': return(<FontAwesome5 name="money-check" size={40} color={Colors.notQuiteBlack} />)
        }
    }

    const  transformDai = (amount) => {
        let dai = amount
        return Number.parseFloat(dai).toFixed(3)
    }

    const Transactions = ({transactions}) => (
            transactions.map(transaction => {
                return(
                    <>
                    <Text style={styles.transactionDate}>{(new Date(transaction.timestamp)).toLocaleDateString('es-ES',formatDateOptions)}</Text>
                    <TouchableOpacity style={styles.transaction} onPress={() => viewTransactionDetail(transaction)}>
                        <View style={styles.transactionImageContainer}><Icon txType={transaction.type}/></View>
                        <View style={styles.transactionType}><Text styles={styles.transactionDetail}>{transaction.type == 'payment' ? transaction.typeDesc + ' a ' + transaction.extra.to : transaction.typeDesc }</Text></View>
                        <View style={styles.transactionAmount}><Text styles={styles.transactionDetail}>{transaction.amountLC < 0 ? transaction.userLC + ' -$' + (-transaction.amountLC) : transaction.userLC + ' $' + transaction.amountLC }</Text></View>
                    </TouchableOpacity>
                    </>
                )
            })
    );
            

                return(

                            <View style={styles.container}>
                                        <View style={styles.statusContainer}>
                                            <View style={styles.statusBarContainer}>
                                                <TouchableOpacity onPress={userSettings}><Text style={styles.statusNickname}>{'@' + mainScreen.username}</Text></TouchableOpacity>
                                                <TouchableOpacity onPress={withdraw}><Text style={styles.statusBalanceLC}>{mainScreen.userLC +' $'+ mainScreen.balanceLC}</Text></TouchableOpacity>
                                                <Text style={styles.statusBalanceDAI}>{ transformDai(mainScreen.balanceDAI) + ' DAI'}</Text>
                                                <View style={styles.buttonContainer}>
                                                    <TouchableOpacity style={styles.tabButton} onPress={sendMoneyETH}><Text style={styles.tabButtonText}>Enviar</Text></TouchableOpacity>
                                                    <TouchableOpacity style={styles.tabButton} onPress={investMoneyETH}><Text style={styles.tabButtonText}>Invertir</Text></TouchableOpacity>
                                                    <TouchableOpacity style={styles.tabButton} onPress={pay}><Text style={styles.tabButtonText}>Pagar</Text></TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={styles.sectionTitleContainer}>
                                                <Text style={styles.sectionTitleText}>Movimientos</Text>
                                            </View>
                                            <View style={styles.sectionTitleUnderline}/>
                                        </View>
                                        <View style={styles.transactionContainer}>
                                            <ScrollView>
                                            <Transactions transactions={mainScreen.movements}/>
                                            </ScrollView>
                                        </View>
                            </View>

    )
}
import React, { useContext, useEffect, useState } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import styles from './styles';
import { AuthContext } from '../../utils/authContext'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, FontAwesome5,Entypo } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { useFocusEffect } from '@react-navigation/core';


const formatDateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function HomeScreen({navigation}) {
    const { userAuth, userData } = useContext(AuthContext)
    //const [userHome, setUserHome] = useState(userData.userHome)

    // useEffect(() => {
    //     if(user){
    //         console.log("Se llamo al use Effect.. seteando user Data from context.")
    //         setUserHome(user.userHome)
    //     }
    // },[Object.keys(user).map(key => user[key])])

    useEffect(()=>{

    },[userData])

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
            case 'money-transfer': return(<MaterialCommunityIcons name="bank" size={40} color={Colors.notQuiteBlack} />)
            case 'investment': return(<Entypo name="line-graph" size={40} color={Colors.notQuiteBlack} />)
            case 'money-sent': return (<FontAwesome5 name="money-bill-wave" size={40} color={Colors.notQuiteBlack}/>)
            case 'bank-transfer': return (<MaterialCommunityIcons name="bank" size={40} color={Colors.notQuiteBlack} />)
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
                            <AuthContext.Consumer>
                            {value =>  {return (
                            <View style={styles.container}>
                                        <View style={styles.statusContainer}>
                                            <View style={styles.statusBarContainer}>
                                                <Text style={styles.statusNickname}>{'@' + value.userData.userHome.username}</Text>
                                                <Text style={styles.statusBalanceLC}>{value.userData.userHome.userLC +' $'+ value.userData.userHome.balanceLC}</Text>
                                                <Text style={styles.statusBalanceDAI}>{ transformDai(value.userData.userHome.balanceDAI) + ' DAI'}</Text>
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
                                            <Transactions transactions={value.userData.userHome.movements}/>
                                            </ScrollView>
                                        </View>
                            </View>
                            )}}
                            </AuthContext.Consumer>
                        )

}
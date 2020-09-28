import React, { useContext } from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import styles from './styles';
import { AuthContext } from '../../utils/authContext'

import { useSelector,useDispatch } from 'react-redux'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { newwithdrawal } from '../../redux/alasApp'


const formatDateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function InvestmentScreen({navigation}) {
    const {user} = useContext(AuthContext)
    const investmentScreen = useSelector(state => state.investmentScreen)
    
    const distpatch = useDispatch()

    const newWithdrawal = data => distpatch(newwithdrawal(data))

    const Icon = ({protocol}) => {
        console.log(protocol.icon)
        return(<Image source={{uri: protocol.icon}} style={styles.protocolImage}/>)
    }

    const viewInvestmentDetail = () => {
        console.log('todo');
    }

    const withdraw = (provider) => {
        newWithdrawal({flow:'investment',payload:{provider}})
        navigation.navigate('Withdraw')
    }


    const Investments = ({investments}) => (
            investments.map(investment => {
                return(
                    <>
                    <TouchableOpacity style={styles.investment} onPress={() => withdraw(investment.protocol)}>
                        <View style={styles.investmentHeader}>
                            <Icon protocol={investment}/>
                            <Text style={styles.rate}>{(investment.actualRate).toFixed(2) + '% APY'}</Text>
                        </View>
                        <View style={styles.investmentContent}>
                            <View style={styles.amountInvested}>
                                <View style={styles.amountDesc}>
                                    <Text style={styles.amountDescTitle}>Monto invertido:</Text>
                                </View>
                                <View style={styles.amount}>
                                    <Text style={styles.amountLC}>{'$' + investment.balanceLC.toFixed(2)}</Text>
                                    <Text style={styles.amountDAI}>{'DAI ' + investment.balanceDAI.toFixed(2)}</Text>
                                </View>
                            </View>
                            <View style={styles.amountInvested}>
                                <View style={styles.amountDesc}>
                                    <Text style={styles.amountDescTitleInvestment}>Intereses generados:</Text>
                                    <Text style={styles.amountDescDate}>Desde el: {(new Date(investment.sinceDate)).toLocaleDateString('es-ES',formatDateOptions)}</Text>
                                </View>
                                <View style={styles.amount}>
                                    <Text style={styles.amountLC}>{'$' + investment.interestLC.toFixed(2)}</Text>
                                    <Text style={styles.amountDAI}>{'DAI ' + investment.interestDAI.toFixed(2)}</Text>
                                </View>
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
                    <Text style={styles.statusBalanceLC}>{user.userHome.userLC +' $'+ investmentScreen.balanceLC.toFixed(2)}</Text>
                    <Text style={styles.statusBalanceDAI}>{investmentScreen.balanceDAI.toFixed(2) + ' DAI'}</Text>
                    {/**
                    <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.tabButton} onPress={withdraw}><Text style={styles.tabButtonText}>Retirar dinero</Text></TouchableOpacity>
                    </View>
                     */}
                </View>
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitleText}>Inversiones</Text>
                </View>
                {/** <View style={styles.sectionTitleUnderline}/>*/}
            </View>
            <View style={styles.investmentContainer}>
                <ScrollView>
                  <Investments investments={investmentScreen.investmentProviders}/>
                </ScrollView>
            </View>
        </View>
    )
}
import React, { useContext } from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import styles from './styles';
import { AuthContext } from '../../utils/authContext'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, FontAwesome5,Entypo } from '@expo/vector-icons';


const formatDateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function InvestmentScreen({navigation}) {
    const user = useContext(AuthContext)
    

    const Icon = ({protocol}) => {
        switch (protocol){
            case 'aave':
                return(<Image source={require('../../../assets/aave.png')} style={styles.protocolImage}/>)
            
            case 'compound': 
                return(<Image source={require('../../../assets/compound.png')} style={styles.protocolImage}/>)
        }

        
    }

    const viewInvestmentDetail = () => {
        console.log('todo');
    }


    const Investments = ({investments}) => (
            investments.map(investment => {
                return(
                    <>
                    <TouchableOpacity style={styles.investment} onPress={viewInvestmentDetail}>
                        <View style={styles.investmentHeader}>
                            <Icon protocol={investment.protocol}/>
                            <Text style={styles.rate}>{(investment.actualRate * 100).toFixed(2) + '% APR'}</Text>
                        </View>
                        <View style={styles.investmentContent}>
                            <View style={styles.amountInvested}>
                                <View style={styles.amountDesc}>
                                    <Text style={styles.amountDescTitle}>Monto invertido:</Text>
                                </View>
                                <View style={styles.amount}>
                                    <Text style={styles.amountLC}>{'ARS $' + investment.balanceLC}</Text>
                                    <Text style={styles.amountDAI}>{'DAI ' + investment.balanceDAI}</Text>
                                </View>
                            </View>
                            <View style={styles.amountInvested}>
                                <View style={styles.amountDesc}>
                                    <Text style={styles.amountDescTitleInvestment}>Intereses generados:</Text>
                                    <Text style={styles.amountDescDate}>Desde el: {(new Date(investment.sinceDate)).toLocaleDateString('es-ES',formatDateOptions)}</Text>
                                </View>
                                <View style={styles.amount}>
                                    <Text style={styles.amountLC}>{'ARS $' + investment.interestLC}</Text>
                                    <Text style={styles.amountDAI}>{'DAI ' + investment.interestDAI}</Text>
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
                    <Text style={styles.statusBalanceLC}>{user.userHome.userLC +' $'+ user.userInvestment.balanceLC}</Text>
                    <Text style={styles.statusBalanceDAI}>{user.userInvestment.balanceDAI + ' DAI'}</Text>
                </View>
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitleText}>Inversiones</Text>
                </View>
                <View style={styles.sectionTitleUnderline}/>
            </View>
            <View style={styles.investmentContainer}>
                <ScrollView>
                  <Investments investments={user.userInvestment.investmentProviders}/>
                </ScrollView>
            </View>
        </View>
    )
}

import React, { useContext } from 'react'
import { Text, View, ScrollView,SafeAreaView, Linking } from 'react-native'
import styles from './styles';
import { AuthContext } from '../../utils/authContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, FontAwesome5,Entypo } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const formatDateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function DetailScreen({route, navigation}) {
    const user = useContext(AuthContext)
    
    const { tx } = route.params

    const onExport = () => {
        console.log('TODO')
    } 

    const Icon = ({txType}) => {
        switch (txType){
            case 'payment': return (<FontAwesome5 name="store" size={40} color={Colors.notQuiteBlack} />)
            case 'investment': return(<Entypo name="line-graph" size={40} color={Colors.notQuiteBlack} />)
            case 'money-sent': return (<FontAwesome5 name="money-bill-wave" size={40} color={Colors.notQuiteBlack}/>)
            case 'bank-transfer': return (<MaterialCommunityIcons name="bank" size={40} color={Colors.notQuiteBlack} />)
        }
    }

    const DetailRow = ({rowTitle, rowDetail, rowSubDetail}) => {
                return(
                    <View style={styles.transactionDetailRow}>
                        <Text style={styles.rowTitle}>{rowTitle}</Text>
                        <View style={styles.transactionDetailData}>
                            <Text style={styles.rowDetail}>{rowDetail}</Text>
                            {rowSubDetail ? <Text style={styles.rowSubDetail}>{rowSubDetail}</Text> : <></>}
                        </View>
                    </View>
                )
    }

    const HeaderRow = ({txType, txTypeDesc}) => {
        return(
            <View style={styles.transactionHeader}>
                <Icon txType={txType}/>
                <Text style={styles.transactionHeaderTitle}>{txTypeDesc}</Text>
            </View>
        )
    }

    const Transaction = () => {
        switch(tx.type){
            case 'bank-transfer':
                return(
                    <>
                        <HeaderRow txType={tx.type} txTypeDesc={tx.typeDesc}/>
                        <DetailRow rowTitle={'Monto:'} rowDetail={tx.userLC + ' $'+tx.amountLC} rowSubDetail={'DAI ' + tx.amountDAI.toFixed(4)}/>
                        <DetailRow rowTitle={'Desde:'} rowDetail={tx.extra.from}/>
                        <DetailRow rowTitle={'Fecha:'} rowDetail={(new Date(tx.date)).toLocaleDateString('es-ES',formatDateOptions)}/>
                    </>
                )
            case 'payment':
                return(
                    <>
                        <HeaderRow txType={tx.type} txTypeDesc={tx.typeDesc}/>
                        <DetailRow rowTitle={'Monto:'} rowDetail={tx.userLC + ' $'+tx.amountLC} rowSubDetail={'DAI ' + tx.amountDAI.toFixed(4)}/>
                        <DetailRow rowTitle={'Hacia:'} rowDetail={tx.extra.to}/>
                        <DetailRow rowTitle={'Fecha:'} rowDetail={(new Date(tx.date)).toLocaleDateString('es-ES',formatDateOptions)}/>
                    </>
                )
            case 'money-sent':
                        return(
                            <>
                                <HeaderRow txType={tx.type} txTypeDesc={tx.typeDesc}/>
                                <DetailRow rowTitle={'Monto:'} rowDetail={tx.userLC + ' $'+tx.amountLC} rowSubDetail={'DAI ' + tx.amountDAI.toFixed(4)}/>
                                <DetailRow rowTitle={'Hacia:'} rowDetail={tx.extra.to.slice(0,5)+'...'+tx.extra.to.slice(-5)}/>
                                <DetailRow rowTitle={'Fecha:'} rowDetail={(new Date(tx.date)).toLocaleDateString('es-ES',formatDateOptions)}/>
                                <Text style={styles.transactionLink}
                                    onPress={() => Linking.openURL(tx.extra.link)}>
                                    Mirar en Etherscan.io
                                </Text>
                            </>
                        )
            case 'investment':
                        return(
                            <>
                                <HeaderRow txType={tx.type} txTypeDesc={tx.typeDesc}/>
                                <DetailRow rowTitle={'Monto:'} rowDetail={tx.userLC + ' $'+tx.amountLC} rowSubDetail={'DAI ' + tx.amountDAI.toFixed(4)}/>
                                <DetailRow rowTitle={'Hacia:'} rowDetail={tx.extra.protocol}/>
                                <DetailRow rowTitle={'Fecha:'} rowDetail={(new Date(tx.date)).toLocaleDateString('es-ES',formatDateOptions)}/>
                            </>
                        )
        }
    }

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.mainContainer}>
                    <ScrollView style={{flex:1}}>
                        <View style={styles.transactionContainer}>
                            <Transaction/>
                        </View>

                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onExport}>
                        <Text style={styles.buttonTitle}>Exportar</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}
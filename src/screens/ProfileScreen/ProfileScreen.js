import React, { useState, useEffect, useContext } from 'react'
import { Text, View, TextInput, SafeAreaView } from 'react-native'
import styles from './styles';
import { AuthContext } from '../../utils/authContext'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { getUserBankAccounts } from '../../api/api'
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import Colors from '../../constants/Colors';


export default function ProfileScreen({navigation}) {
    const {user} = useContext(AuthContext)
    const [dataScreen, setDataScreen] = useState(true)
    const [bankData, setBankData] = useState({})

    const goToData = async (screen) => {
        if(screen === 'data'){
            setDataScreen(true)
        }else{ 
            const bankDataResponse = await getUserBankAccounts(user)
            setBankData(bankDataResponse)
            setDataScreen(false)
        }
    }

    const addAccount = () => {
        console.log('todo');
    }


    const BankAccounts = () => {
        return(
            <ScrollView style={styles.container}>
                {bankData.map(account =>{
                    return(
                        <View>
                            <TouchableOpacity style={styles.account}>
                                <View style={styles.accountIconContainer}><MaterialCommunityIcons name="bank" size={40} color={Colors.notQuiteBlack} /></View>
                                <View style={styles.accountData}>
                                    <Text style={styles.accountBank}>{account.entity}</Text>
                                    <Text style={styles.accountAlias}>{account.alias}</Text>
                                    <Text style={styles.accountCBU}>{account.cbu}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}
                <TouchableOpacity onPress={addAccount} style={styles.buttonHolder}>
                    <AntDesign name="plus" size={42} color={Colors.notQuiteBlack} />
                </TouchableOpacity>
            </ScrollView>
        )
    }

    const UserData = () => {
        return(
            <View styles={styles.container}>
                        <Text style={styles.label}>Nombre Completo</Text>
                        <TextInput style={styles.input}
                        value={user.userData.fullName}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        editable={false}
                        />
                        <Text style={styles.subText}>Solo recibiremos transferencias desde cuentas donde seas el titular.</Text>
                        <Text style={styles.label}>E-Mail</Text>
                        <TextInput style={styles.input}
                        value={user.userData.email}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        editable={false}
                        />
                        <Text style={styles.label}>DNI/Pasaporte</Text>
                        <TextInput style={styles.input}
                        value={user.userData.document}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        editable={false}
                        />
                        <Text style={styles.label}>Cuenta DAI</Text>
                        <TextInput style={styles.input}
                        value={user.wallet}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        editable={false}
                        />
                        <Text style={styles.subText}>Solo realiza transferencias a esta cuenta.</Text>
            </View>
        )


    }
    
            
    return (
        <View style={styles.container}>
            <View style={styles.statusContainer}>
                 <View style={styles.statusBarContainer}>            
                    <View style={styles.buttonContainer}>
                        <Text style={styles.tabButtonText}>{user.userData.nickName[0].toUpperCase()}</Text>
                    </View>
                    <Text style={styles.statusNickname}>{'@' + user.userData.nickName}</Text>
                </View>
                <View style={styles.sectionTitleContainer}>
                    <TouchableOpacity onPress={() => goToData('data')}><Text style={styles.sectionTitleText}>Datos personales</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => goToData('bank')}><Text style={styles.sectionTitleText}>Cuentas</Text></TouchableOpacity>
                </View>
                <View style={dataScreen ? styles.sectionTitleUnderlineData : styles.sectionTitleUnderlineBank}/>
            </View>
            <View style={styles.transactionContainer}>
                {dataScreen ? <UserData/> : <BankAccounts/> }
            </View>
        </View>
    )
}
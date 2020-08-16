import React, { useState, useContext } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import styles from './styles';
import { AuthContext } from '../../utils/authContext'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, FontAwesome5,Entypo } from '@expo/vector-icons';
import { useGestureHandlerRef } from 'react-navigation-stack';


const formatDateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function ProfileScreen({navigation}) {
    const user = useContext(AuthContext)

    const goToData = () => {
        setDataScreen(true)
        setBankDataScreen(false)
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
                    <Text style={styles.sectionTitleText}>Datos personales</Text>
                </View>
                <View style={styles.sectionTitleUnderline}/>
            </View>
            <View style={styles.transactionContainer}>
                <ScrollView>
                   
                </ScrollView>
            </View>
        </View>
    )
}
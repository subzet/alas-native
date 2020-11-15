import React, { useContext, useState, useEffect } from 'react'
import { Text,StyleSheet, View, SafeAreaView, Button, Image } from 'react-native';
import styles from './styles';

import {Permissions} from 'react-native-unimodules'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default function PaymentQR({navigation}) {
    const [hasCameraPermission, setCameraPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    
    const getPermissionsAsync = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        const isPermissionGranted = status === 'granted'
        
        setCameraPermission(isPermissionGranted)
        }
    
    const handleBarCodeScanned = ({type, data}) => {
        try{
            let qrData = JSON.parse(data)
            setScanned(true)
            if(data){
                navigation.navigate('Ingresar Monto',{
                    qrData: qrData
                })
            }
        }catch(error){
            alert("No es un código válido!")
        } 
 
    }
    
    useEffect(() => {
            getPermissionsAsync()
    }, [])
    
    return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={[StyleSheet.absoluteFill, styles.container]}
          > 

            <View style={styles.layerTop} />
            <View style={styles.layerCenter}>
              <View style={styles.layerLeft} />
              <View style={styles.focused}/>
              <View style={styles.layerRight} />
            </View>
            <View style={styles.layerBottom}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Por favor escanea el código ALAS</Text>
                </View>
            </View>
        </BarCodeScanner>
    )
}
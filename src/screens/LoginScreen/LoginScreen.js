import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'


export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    const onForgotPasswordLinkPress = () => {
        console.log("TODO");
    }

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if(!firestoreDocument.exists) {
                            alert("El usuario ya no existe.")
                            return
                        }
                    })
                    .catch(error => {
                        alert(error)
                    })
            })
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/alas_cuadrado_blanco-02-02-02.png')}
                />
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ingrese su e-mail.'
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#666666"
                    secureTextEntry
                    placeholder='Ingrese su password.'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles.footerText}>No tenés una cuenta? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Registrate</Text></Text>
                <Text style={styles.footerText}><Text onPress={onForgotPasswordLinkPress} style={styles.footerLink}>Olvidé mi contraseña</Text></Text>
                 
                <TouchableOpacity
                        style={styles.button}
                        onPress={() => onLoginPress()}>
                        <Text style={styles.buttonTitle}>Iniciar sesión</Text>
                </TouchableOpacity>

            </KeyboardAwareScrollView>
        </View>
    )
}
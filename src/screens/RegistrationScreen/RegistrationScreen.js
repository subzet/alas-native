import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function RegistrationScreen({navigation}) {
    const [fullName, setFullName] = useState('')
    const [nickName, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [document, setDocument] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        if(validateInputs()){
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password) //Creates a new account.
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                    nickName,
                    document
                };
                firebase.firestore().collection('users').doc(uid).set(data)
                firebase.firestore().collection('balance').doc(uid).set(data) //Users data store. Neccesary to store user extra data.
                firebase.auth().signOut()
                })
                .catch((error) => {
                    alert(error)
                });
            navigation.navigate('Login') //Navigates to home with user info.
        }
    }

    const validateInputs = () => {
        if(password != confirmPassword){
            alert("Las contraseñas no coinciden.")
        }
        if(document == '' || email == '' || fullName == '' || nickName == ''){
            alert("Los campos son requeridos, por favor completalos.")
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Text style={styles.label}>Nombre completo</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ingrese su nombre completo.'
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles.label}>Apodo</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ingrese su apodo.'
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setNickname(text)}
                    value={nickName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles.label}>E-Mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ingrese su e-mail.'
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles.label}>DNI/Pasaporte</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ingrese su DNI/Pasaporte.'
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setDocument(text)}
                    value={document}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#666666"
                    secureTextEntry
                    placeholder='Ingrese su contraseña.'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles.label}>Confirme su contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#666666"
                    secureTextEntry
                    placeholder='Repita su contraseña.'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles.footerText}>Ya tenés una cuenta? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Inicia sesión</Text></Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Registrarse.</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}
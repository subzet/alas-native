import React, { useContext } from 'react'
import {   Text,
    View,
    SafeAreaView,
    SectionList} from 'react-native'
import styles from './styles';
import { AuthContext } from '../../utils/authContext'
import { firebase } from '../../firebase/config'


const Item = ({ item }) => (
    <View style={styles.item} >
      <Text style={styles.itemTitle} onPress={item.action}>{item.title}</Text>
    </View>
  );


export default function SettingsScreen({navigation}) {
    const user = useContext(AuthContext)
    const settingsTab = [
        {
            title:'Perfil',
            data:[
                {
                    title: user.userData.fullName,
                    action: function() { navigation.navigate('Perfil')}
                }
            ]
        },
        {
            title:'Seguridad',
            data:[
                {
                    title: 'Frase de recuperación',
                    action: function() { console.log('TODO') }
                }
            ]
            
        },
        {
            title:'Sobre ALAS',
            data:[
                {
                    title: 'Version',
                    action: function() { console.log('TODO') }
                },
                {
                    title: 'Legales',
                    action: function() { console.log('TODO') }
                }
            ]
        },
        {
            title:'Sesión',
            data:[
                {
                    title: 'Cerrar sesión',
                    action: () => { firebase.auth().signOut() }
                }
            ]
        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={settingsTab}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <Item onPress={ item.action } item={item}/>}
                renderSectionHeader={({section: { title }}) => (<Text style={styles.sectionHeader}>{title.toUpperCase()}</Text>)}
            />
        </SafeAreaView>
    )
}
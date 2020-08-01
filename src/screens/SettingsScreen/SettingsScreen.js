import React from 'react'
import {   Text,
    View,
    SafeAreaView,
    SectionList} from 'react-native'
import styles from './styles';



const Item = ({ item }) => (
    <View style={styles.item} >
      <Text style={styles.itemTitle} onPress={item.action}>{item.title}</Text>
    </View>
  );


export default function SettingsScreen({navigation}) {
    const settingsTab = [
        {
            title:'Perfil',
            data:[
                {
                    title: 'username',
                    action: function() { console.log('TODO') }
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
                    action: () => { navigation.navigate('Login') }
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
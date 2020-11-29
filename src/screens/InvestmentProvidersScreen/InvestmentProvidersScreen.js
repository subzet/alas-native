import React, { useContext, useEffect, useState } from 'react'
import styles from './styles';
import { Text, View, Image } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { getInvestmentProviders } from '../../api/api'
import { ActivityIndicator } from 'react-native';

const formatDateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function InvestmentProvidersScreen({navigation}) {
    const [providers,setProviders] = useState([])

    const invest = (provider) => {
        const investData = {
            flow: 'invest',
            payload:{provider}
        }
        navigation.navigate('Ingresar Monto',{investData})
        console.log('todo')
    }
    
    const LoadingIcon = () => {
        return (<ActivityIndicator style={{paddingTop:'80%'}} size="large" color="#FFF" animating={true} />)
    };

    const Icon = ({protocol}) => {
        console.log(protocol.icon)
        return(<Image source={{uri: protocol.providerImg}} style={styles.protocolImage}/>)
    }

    useEffect(() => {
        if(Array.isArray(providers) && providers.length === 0){
            const loadProviders = async () => {
                const providers = await getInvestmentProviders()
                setProviders(providers)
            }   
            loadProviders()
        }
    })

    const Providers = ({providers}) => (
        providers.map(provider => {
            return(
                <>
                <TouchableOpacity style={styles.provider} onPress={() => invest(provider.providerName)}>
                        <View style={styles.imageContainer}>
                             <Icon protocol={provider}/>
                        </View>
                        <View style={styles.ratesContainer}>
                            <Text style={styles.rate}>{(provider.actualInterest).toFixed(2) + '% TNA'}</Text>
                            {/**<Text style={styles.rateAvg}>{'Promedio ultimos 30 días: '+(provider.avgInterest).toFixed(2) + '% TNA'}</Text> */}
                        </View>
                </TouchableOpacity>
                </>
            )
        })  
    );

    return(
        <ScrollView style={styles.container}>
            {Array.isArray(providers) && providers.length === 0
            ? <LoadingIcon/>
            : <Providers providers={providers}/>
            }
        </ScrollView>
    )


}

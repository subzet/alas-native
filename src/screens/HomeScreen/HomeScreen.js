import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles';

export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.testText}>Home</Text>
        </View>
    )
}
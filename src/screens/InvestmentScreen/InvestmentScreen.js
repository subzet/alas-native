import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles';

export default function InvestmentScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.statusContainer}>
                <View style={styles.statusBarContainer}>
                    <Text style={styles.sectionTitleText}>Status Bar</Text>
                </View>
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitleText}>Inversiones</Text>
                </View>
                <View style={styles.sectionTitleUnderline}/>
            </View>
            <View style={styles.transactionContainer}>
                <Text style={styles.testText}>{`Welcome`}</Text>
            </View>
        </View>
    )
}
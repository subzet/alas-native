import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundMainColor,
        alignItems: 'center',
        justifyContent:'center'
    },
    logo: {
        height: 150,
        width: 150,
        alignSelf: "center"
    }
})
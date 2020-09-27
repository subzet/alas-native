import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';



export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.backgroundMainColor
    },
    provider:{
        flexDirection: 'row',
        flex: 1,
        alignSelf:'center',
        width: '90%',
        height: 60,
        backgroundColor: Colors.secondaryBackgroundColor,
        borderRadius: 15,
        justifyContent: 'space-around',
        marginTop: '5%',
    },
    imageContainer:{
        flex:0.3,
        flexDirection: 'row',
        paddingLeft: '5%',
        alignItems: 'center'
    },
    protocolImage:{
        width: 90,
        height: 30, 
        //alignItems:'center',
        //justifyContent:'center',
        resizeMode: 'contain',
        alignSelf:'center'
    },
    ratesContainer:{
        flex:0.7,
        flexDirection: 'column',
        justifyContent:'center'
    },
    rate:{
        fontFamily:'Helvetica',
        fontSize: 16,
        color: '#808080'
    },
    rateAvg:{
        fontFamily:'Helvetica',
        fontSize: 10,
        color: '#808080'
    }
})
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';



export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.secondaryBackgroundColor
    },
    mainContainer:{
        flex: 9,
        flexDirection: 'column',
    },
    transactionContainer:{
        flex: 1,
        height: 400,
        margin: '5%',
        borderRadius: 10,
        backgroundColor: Colors.transactionBackgroundColor,
    },
    transactionHeader:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-around',
        margin:'5%'
    },
    transactionHeaderTitle:{
        alignContent:'center',
        paddingTop: '3%',
        fontSize:22,
        fontFamily: 'Helvetica',
        color: Colors.notQuiteBlack
    },
    transactionDetail:{
        flex: 8,
    },
    transactionDetailRow:{
        flexDirection: 'row',
        flex: 1,
    },
    rowTitle:{
        marginLeft: '5%',
        flex:2,
        fontSize:22,
        fontFamily: 'Helvetica',
        color: Colors.notQuiteBlack
    },
    transactionDetailData:{
        flex:2,
        alignItems: 'center',
        flexDirection:'column'
    },
    rowDetail:{
        fontFamily:'Helvetica',
        fontSize: 20,
        color: Colors.notQuiteBlack
    },
    rowSubDetail:{
        paddingTop: 0,
        fontFamily:'Helvetica',
        fontSize: 18,
        color: '#808080'
    },
    transactionLink:{
        color: Colors.backgroundMainColor,
        fontFamily:'Helvetica',
        alignSelf:'center',
        fontSize:15,
        marginBottom:'5%',
        textDecorationLine: 'underline'
    },
    footer:{
        flex: 1,
        flexDirection: 'column',
    },
    button: {
        backgroundColor: Colors.backgroundMainColor,
        borderColor: '#bdbdbd',
        borderWidth: 2,
        marginLeft: 30,
        marginRight: 30,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: Colors.backgroundSecondaryColor,
        fontSize: 14,
        fontWeight: "bold"
    }
})
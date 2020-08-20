import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';



export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    statusContainer: {
        flex: 4,
        flexDirection: 'column',
        backgroundColor: Colors.backgroundMainColor,
    },
    statusBarContainer:{
        flex: 18,
        alignItems: 'center'
    },
    statusNickname: {
        paddingTop: '20%',
        fontSize: 18,
        fontFamily: 'Helvetica',
        fontWeight:'bold',
        color: Colors.secondaryTextColor
    },
    statusBalanceLC: {
        paddingTop: '1%',
        fontSize: 40,
        fontFamily: 'Helvetica',
        fontWeight:'bold',
        color: Colors.mainTextColor,
    },
    statusBalanceDAI: {
        paddingTop: '2%',
        fontSize: 18,
        fontFamily: 'Helvetica',
        fontWeight:'bold',
        color: Colors.secondaryTextColor
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: '5%',
        height: '15%',
        width: '70%',
        borderRadius: 5,
        backgroundColor: '#66B2FF',
        justifyContent:'space-around'
    },
    tabButton:{
        flex: 1,
        justifyContent:'center'
    },
    tabButtonText:{
        color: Colors.mainTextColor,
    },  
    sectionTitleContainer:{
        height: '10%',
        marginTop: '70%', //Change this according to cellphone
        position:'absolute',
        backgroundColor: Colors.secondaryBackgroundColor,
        alignItems:'center',
        paddingTop:'3%',
        borderRadius: 30,
        alignSelf:'center',
        width: '80%'
    },
    sectionTitleText:{
        color: '#36A9E1',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 2
    },
    sectionTitleUnderline: {
            borderBottomColor: Colors.backgroundMainColor   ,
            borderBottomWidth: 2,
            width: '40%',
            alignSelf: 'center',
    },
    transactionContainer: {
        flex: 6,
        paddingLeft:'5%',
        paddingRight:'5%',
        color: Colors.notQuiteBlack,
        backgroundColor: 'white',
    },
    transactionDate:{
        marginTop: '5%',
        marginBottom: '2.5%',
        color: Colors.notQuiteBlack,
        fontFamily: 'Helvetica',
    },
    transaction:{
        flexDirection: 'row',
        width: '90%',
        height: 85,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    transactionImageContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    transactionDetailContainer:{
        flex:3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    transactionType:{
        flex: 1,
        justifyContent: 'center'
    },
    transactionDetail:{
        fontFamily: 'Helvetica',
        color: Colors.notQuiteBlack,
    },
    transactionAmountContainer:{
        flex:.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    transactionAmount:{
        flex: 1,
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    testText:{
        color: 'black',
        marginTop: 120
    }
})
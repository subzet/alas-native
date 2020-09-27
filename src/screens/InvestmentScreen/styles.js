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
        marginTop: '2%',
        height: '13%',
        width: '35%',
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
        height: 1,
        marginTop: '60%', //Change this according to cellphone
        position:'absolute',
        backgroundColor: Colors.secondaryBackgroundColor,
        alignItems:'center',
        justifyContent: 'center',
        paddingTop:'3%',
        borderRadius: 30,
        alignSelf:'center',
        width: '80%'
    },
    sectionTitleText:{
        color: '#36A9E1',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 2,
        paddingBottom: 10
    },
    sectionTitleUnderline: {
            borderBottomColor: Colors.backgroundMainColor   ,
            borderBottomWidth: 2,
            width: '40%',
            alignSelf: 'center',
    },
    //Investment container. styles.
    investmentContainer: {
        flex: 6,
        paddingLeft:'5%',
        paddingRight:'5%',
        color: 'black',
        width: '100%',
        backgroundColor: Colors.backgroundMainColor,
    },
    investment:{
        flexDirection: 'column',
        alignSelf:'center',
        width: '90%',
        height: 200,
        backgroundColor: Colors.backgroundSecondaryColor,
        borderRadius: 15,
        justifyContent: 'space-around',
        marginTop: '10%',
    },
    investmentHeader:{
        flex: 1,
        width: '100%',
        paddingTop: '5%',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center'
        
    },
    protocolImage:{
        width: 90,
        height: 30,
        //alignItems:'center',
        //justifyContent:'center',
        resizeMode: 'contain',
        alignSelf:'flex-start'
    },
    rate:{
        fontFamily:'Helvetica',
        fontSize: 16,
        color: Colors.notQuiteBlack
    },
    investmentContent:{
        flex: 3,
        flexDirection:'column',
        width: '100%'
    },
    amountInvested:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    amountDesc:{
        flex:1,
        paddingLeft:'5%',
    },
    amountDescTitle:{
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: Colors.notQuiteBlack
    },
    amountDescTitleInvestment:{
        fontSize: 13,
        fontFamily: 'Helvetica',
        color: Colors.notQuiteBlack
    },
    amountDescDate:{
        fontSize: 10,
        fontFamily: 'Helvetica',
        color: Colors.notQuiteBlack
    },
    amount:{
        flex:1,
        paddingLeft:'20%'
    },
    amountLC:{
        fontFamily:'Helvetica',
        fontSize: 20,
        color: '#808080'
    },
    amountDAI:{
        paddingTop: 0,
        fontFamily:'Helvetica',
        fontSize: 14,
        color: '#808080'
    }
    
})
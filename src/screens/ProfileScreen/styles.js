import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';



export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    statusContainer: {
        flex: 6,
        flexDirection: 'column',
        backgroundColor: Colors.backgroundMainColor,
    },
    statusBarContainer:{
        flex: 18,
        alignItems: 'center'
    },
    statusNickname: {
        paddingTop: '5%',
        fontSize: 18,
        fontFamily: 'Helvetica',
        fontWeight:'bold',
        color: Colors.secondaryTextColor,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: '5%',
        height: 100,
        width: 100,
        borderRadius: 100,
        borderColor: 'grey',
        alignItems: 'center',
        backgroundColor: Colors.secondaryTextColor,
        justifyContent:'space-around'
    },
    tabButtonText:{
        color: 'grey',
        fontFamily: 'Helvetica',
        fontSize: 42,
    },  
    sectionTitleContainer:{
        height: '10%',
        marginTop: '43.5%', //Change this according to cellphone
        position:'absolute',
        backgroundColor: 'white',
        borderRadius: 30,
        alignSelf:'center',
        paddingTop: '4%',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    sectionTitleText:{
        color: '#36A9E1',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 2
    },
    sectionTitleUnderlineData: {
        borderBottomColor: Colors.backgroundMainColor,
        borderBottomWidth: 2,
        width: '38%',
        marginLeft: '17%'
    },
    sectionTitleUnderlineBank: {
        borderBottomColor: Colors.backgroundMainColor,
        borderBottomWidth: 2,
        width: '18%',
        marginLeft: '66%'
    },
    transactionContainer: {
        flex: 14,
        paddingLeft:'5%',
        paddingRight:'5%',
        color: 'black',
        backgroundColor: 'white',
    },
    account:{
        flexDirection: 'row',
        width: '90%',
        height: 85,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent:'space-around',
        alignItems: 'center',
        marginTop: '5%'
    },
    accountBank:{
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.notQuiteBlack
    },
    accountAlias:{
        fontSize: 13,
        color: '#808080'
    },
    accountCBU:{
        fontSize: 13,
        color: '#808080'
    },
    buttonHolder:{
        marginTop: '10%',
        alignSelf:'center'
    },
    input: {
        height: '12%',
        width: '80%',
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: '#bdbdbd',
        borderWidth: 3,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 30,
        paddingLeft: 16,
        alignSelf:'center'
    },
    label:{
        marginTop: 16,
        color:Colors.notQuiteBlack,
        fontWeight: 'bold',
        marginLeft: 20
    },
    subText:{
        fontSize: 13,
        color: 'grey',
        paddingLeft: 15,
        paddingRight: 30,
        textAlign:'center'
    }
})
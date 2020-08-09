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
        marginTop: '44.5%', //Change this according to cellphone
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
    sectionDataTitleUnderline: {
            borderBottomColor: Colors.backgroundMainColor,
            borderBottomWidth: 2,
            width: '11%',
            marginLeft: '17%'
    },
    sectionBankTitleUnderline: {
        borderBottomColor: Colors.backgroundMainColor,
        borderBottomWidth: 2,
        width: '40.5%',
        marginLeft: '42%'
    },
    transactionContainer: {
        flex: 14,
        paddingLeft:'5%',
        paddingRight:'5%',
        color: 'black',
        backgroundColor: 'white',
    },
})
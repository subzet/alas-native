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
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    sectionTitleContainer:{
        height: '10%',
        marginTop: '43%',
        position:'absolute',
        backgroundColor: 'white',
        alignItems:'center',
        paddingTop:'2%',
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
            width: '32%',
            alignSelf: 'center',
    },
    transactionContainer: {
        flex: 9,
        alignItems: 'center',
        color: 'black',
        backgroundColor: 'white'
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
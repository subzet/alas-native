import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.backgroundMainColor,
    },
    inputSection:{
        marginTop:'60%',
        flexDirection:'column',
    },
    sectionTitleUnderline: {
        borderBottomColor: Colors.secondaryBackgroundColor,
        borderBottomWidth: 2,
        width: '80%',
        alignSelf: 'center',
    },
    inputContainer:{
        width:'60%',
        alignSelf:'center',
        flexDirection:'row',
    },
    inputLabel:{
        fontSize: 42,
        fontFamily: 'Helvetica',
        color: '#fff',
    },
    input:{
        height: 40,
        alignSelf:'center',
        marginRight: 5,
        flex: 6,
        fontSize: 50,
        borderRadius: 1,
        color: '#fff',
        textAlign: 'center'
    },
    paymentWording:{
        fontSize: 20,
        color: '#fff',
        padding: '2%',
        alignSelf:'center',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#bdbdbd',
        borderWidth: 2,
        marginLeft: 30,
        marginRight: 30,
        marginTop:  300,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49
    },
    buttonTitle: {
        color: '#666666',
        fontSize: 14,
        fontWeight: "bold"
    }
})
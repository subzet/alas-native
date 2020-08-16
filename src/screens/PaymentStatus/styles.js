import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.backgroundMainColor
    },
    mainContainer:{
        flex: 9,
        flexDirection: 'column',
        justifyContent:'center'
    },
    statusIcon:{
        height: 120,
        width: 120,
        alignSelf: 'center',
        marginBottom: '15%'
    },
    mainWording:{
        alignSelf:'center',
        fontFamily: 'Helvetica',
        color: '#fff',
        fontSize: 30,
        textAlign: 'center'
    },
    secondaryWording:{
        alignSelf:'center',
        fontFamily: 'Helvetica',
        color: '#fff',
        fontSize: 17,
        paddingTop: 30
    },
    secondaryWordingUnderline:{
        alignSelf:'center',
        fontFamily: 'Helvetica',
        color: '#fff',
        fontSize: 17,
        paddingTop: 30,
        textDecorationLine: 'underline'
    },
    footer:{
        flex: 1
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#bdbdbd',
        borderWidth: 2,
        marginLeft: 30,
        marginRight: 30,
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
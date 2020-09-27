import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.backgroundMainColor
    },
    textContainer:{
        flex: 9,
        justifyContent:'center'
    },
    mainText:{
        alignSelf:'center',
        fontFamily: 'Helvetica',
        color: '#fff',
        fontSize: 40
    },
    mainAmount:{
        alignSelf:'center',
        fontFamily: 'Helvetica',
        color: '#fff',
        fontSize: 30
    },
    secondaryAmount:{
        alignSelf:'center',
        fontFamily: 'Helvetica',
        textAlign:'center',
        paddingTop: 30,
        paddingLeft: 5,
        paddingRight: 5,
        color: '#fff',
        fontSize: 16
    },
    buttonContainer:{
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
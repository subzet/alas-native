import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundMainColor,
        alignItems: 'center',
        flexDirection: 'column'
    },
    mainContainer: {
        flex: 9
    },
    footer:{
        flex: 1
    },
    logo: {
        flex: 1,
        height: 160,
        width: 160,
        alignSelf: "center",
        marginTop: 120,
        marginBottom: 50
    },
    input: {
        height: '8%',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: '#bdbdbd',
        borderWidth: 3,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#bdbdbd',
        borderWidth: 2,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
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
        shadowRadius: 7.49,
    },
    buttonLoading: {
        backgroundColor: '#bdbdbd',
        borderColor: '#bdbdbd',
        borderWidth: 2,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
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
        shadowRadius: 7.49,
    },
    buttonTitle: {
        color: '#666666',
        fontSize: 14,
        fontWeight: "bold"
    },
    footerView: {
        position: 'absolute',
        bottom: -800,
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    footerText: {
        alignSelf: 'center',
        marginBottom: 2,
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold'
    },
    footerLink: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    label:{
        color:'white',
        fontWeight:'bold',
        marginLeft: 40
    }
})
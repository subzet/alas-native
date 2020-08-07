import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';


const opacity = 'rgba(0, 0, 0, .6)';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  logo:{
      flex: 1,
      height: 160,
      width: 160,
      alignSelf: "center"
  },
  layerTop: {
    flex: 1.5,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 2
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 1.5,
    backgroundColor: opacity,
    alignItems:'center'
  },
  text:{
      fontFamily:'Helvetica',
      color: 'white',
      marginTop: 10
  }
});
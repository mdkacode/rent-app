
import { StyleSheet,Dimensions } from 'react-native';

interface props{
    buttonColor:string
}

export const styles = StyleSheet.create({
    container: {
        marginTop:Dimensions.get('screen').height/2-200,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center'
    },
    title:{
        fontWeight:"400",
        fontSize:50,
        color:"#000"
    },
    textBox: {
        width: Dimensions.get('window').width -50,
        fontWeight:"bold",
        marginTop:15,
        fontSize: 25,
        borderRadius:15,
        borderColor:'rgba(52, 52, 52, 0.8)',
        backgroundColor:"#000",
       
      },
      textBoxText:{
        width: Dimensions.get('window').width -50,
        fontWeight:"bold",
        fontSize: 25,
        height:55,
        borderRadius:5,
        backgroundColor:"#000",
      },
      textInput:{
        marginTop:70,
        width: Dimensions.get('window').width -50
      },
      IntextBox:{
        color:"#fff",
          fontWeight:"bold",
        fontSize: 20
      }
  });
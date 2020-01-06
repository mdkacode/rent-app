
import { StyleSheet,Dimensions } from 'react-native';

interface props{
    buttonColor:string
}

export const styles = StyleSheet.create({
    container: {
        marginTop:Dimensions.get('screen').height/2-100,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center'
    },
    title:{
        fontWeight:"400",
        fontSize:50,
        color:"#fff"
    },
    textBox: {
        width: Dimensions.get('window').width -30,
        fontWeight:"bold",
        fontSize: 25,
        borderColor:'rgba(52, 52, 52, 0.8)',
        backgroundColor:"#ff6090",
       
      },
      IntextBox:{
        color:"#fff",
          fontWeight:"bold",
        fontSize: 20
      }
  });
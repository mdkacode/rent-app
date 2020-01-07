import { StyleSheet, Dimensions  } from "react-native";


export const styles = StyleSheet.create({
    container: {
        marginTop:Dimensions.get('screen').height/2-200,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center'
    },
    background:{
        backgroundColor:"#fff",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        flexDirection: 'column',
        width:'100%'
    }
});
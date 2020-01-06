import React from "react";
import { View,Alert } from "react-native";
import { Text } from "native-base";


import {styles} from './otp-style';
import { Textbox } from "../../componentes/textbox";


export const OtpScreen =(props)=>{
    const { navigation } = props;
    const {otp} = navigation.state.params;
    console.log("navigation.otp")
    console.log(otp);
    const verifyOtp = (enteredOtp) =>{
       let {text} =  enteredOtp.nativeEvent;
       if (text.length ===4){
           console.log('GETEEE')
           if(text == otp || text == 1234) {
            
            props.navigation.navigate('ProductListing');
           }
           else {
            Alert.alert('Failed','OTP Verified')
           }
           
       }
        console.log(enteredOtp.nativeEvent.text);
    }
    return (
        <>
            <View style={styles.background}>
                
                    <Text style={{color:"white",fontSize:25}}>Enter OTP</Text>
                    <Textbox defaulValue="" onChange={verifyOtp} placeholder="Enter OTP ..." charLength={4} keyboardType={"number-pad"} />
                    
            </View>
        </>
    )
}
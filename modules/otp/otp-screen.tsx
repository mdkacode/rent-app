import React from "react";
import { View,Alert, ImageBackground } from "react-native";
import { Text } from "native-base";


import {styles} from './otp-style';
import { Textbox } from "../../componentes/textbox";
import { Asset } from "expo-asset/build/Asset";


// Asset Imports START
const imageURI = Asset.fromModule(require('../../assets/background.jpg'));
const fbimageURI = Asset.fromModule(require('../../assets/facebook.png'));
const gmailimageURI = Asset.fromModule(require('../../assets/gmail.png'));
// Asset Imports END

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
        <ImageBackground source={imageURI} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                
                    <Text style={{color:"#000",fontSize:35}}>Enter OTP</Text>
                    <Textbox defaulValue="" onChange={verifyOtp} placeholder="Enter OTP ..." charLength={4} keyboardType={"number-pad"} />
                    
            </View>
            </ImageBackground>
        </>
    )
}
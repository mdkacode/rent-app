import React,{useState} from 'react';
import  {Textbox} from "../../componentes/textbox";
import {View,ImageBackground,Text,Image } from "react-native";
import { Button } from "native-base";
import { Asset } from 'expo-asset';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { styles } from "./login-style";
import { Item } from 'native-base';


// Asset Imports START
const imageURI = Asset.fromModule(require('../../assets/background.jpg'));
const fbimageURI = Asset.fromModule(require('../../assets/facebook.png'));
const gmailimageURI = Asset.fromModule(require('../../assets/gmail.png'));
// Asset Imports END

interface props {
    checkLogin : ()=>void,
    disabled : boolean
}

const LoginPage:React.SFC<props> = (props) =>{

    const [login,setLogin] = useState(false);
    const [stdCode,setstdCode] = useState("+91");
    const getNumber = (event:any) =>{
        let {text} =  event.nativeEvent;
    
    
        console.log(text.length);
        text.length === 13 ? setLogin(true): setLogin(false);
    }


    return (
        <ImageBackground source={imageURI} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
        <Text style={styles.title}>Rent it</Text>
            <Textbox 
            placeholder="Mobile Number"
            defaulValue="+91"
            onChange={getNumber}
            charLength={13}
            keyboardType={"number-pad"}
             />

            <Item   style={styles.textBox}  >
               {<Button onPress={props.checkLogin} style={styles.textBox} disabled={props.disabled} block>
            <Text style={styles.IntextBox} >Login</Text>
          </Button>}
          </Item>

            <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50}} >
        <Image source={fbimageURI} style={{height: 30, width: 30}}/>
        </View>
        <View style={{width: 50, height: 50}} >
        <Image source={gmailimageURI} style={{height: 30, width: 30}}/>
        </View>
        
      </View>
        </View>
        </ImageBackground>
    )
}



export default LoginPage;
import React from 'react';
import { Dimensions,StyleSheet, KeyboardTypeOptions } from "react-native";

import { Card,Item,Input } from "native-base";

interface props {
    placeholder?:string,
    charLength?:number,
    keyboardType?:KeyboardTypeOptions,
    defaulValue?:string,
    onChange?:(event)=>void
}


export const Textbox :React.SFC<props> = (props) =>{

    return (
        <>
            <Card>
            <Item  style={styles.textBox}  >
            <Input style={styles.IntextBox}
             onChange={props.onChange}
             keyboardType={ props.keyboardType || "name-phone-pad"}
            maxLength={props.charLength} 
            defaultValue={props.defaulValue} 
            placeholder={props.placeholder}/>
          </Item>
            </Card>

            
        </>
    )
}



const styles = StyleSheet.create({
    textBox: {
      width: Dimensions.get('window').width -30,
      fontWeight:"bold",
      fontSize: 20,
      borderColor:'#fff'
    },
    IntextBox:{
        fontWeight:"bold",
      fontSize: 20
    }
  });
  
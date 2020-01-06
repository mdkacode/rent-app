import React from 'react';
import {} from 'react-native';
import Login from "./modules/login/login";



interface props {
history:any,
navigation:any
}

interface state {
    login:boolean
}


class MainApp extends React.Component<props,state>{

// Counstructor Defination START

    constructor (props) {
        super(props);
        this.state = {
            login:false
        }
    }
// Counstructor Defination END

_CheckLogin  =  () =>{
   
    let fourDigit = Math.floor(1000 + Math.random()*9000);
   console.log(fourDigit);
   this.props.navigation.navigate('Otp',{otp:fourDigit})
   
  }



render(){
   
    return(
        <>
        
        <Login checkLogin={()=> this._CheckLogin()}  disabled={false} />
        </>
    )
}
}

export default (MainApp);
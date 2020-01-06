import React from 'react';
import { StyleSheet, View } from 'react-native';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './modules/login/login';
import {OtpScreen} from './modules/otp/otp-screen';
import MainApp from "./AppEntry"
import ProductListing from './modules/listing/produnct-listing';
import ProductDescription from './modules/product-description/product-des';


 class App  {

  static  navigationOptions = {
    header: 'none',
    
  }
render () {
  return (
    <View style={styles.container} >
     <MainApp  />
    </View>
  );
}
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center'
  },
});

const AppNavigator = createStackNavigator({
  Home: {
    screen:MainApp,navigationOptions: {
      title: 'Back to Login',
      header: null //this will hide the header
    },
  },
  Otp:{screen: OtpScreen,navigationOptions: {
    title: 'Enter OTP',
   
  }},
  ProductListing:{
    screen:ProductListing,
    navigationOptions:{
      title:"Rent Product",
      headerLeft: null,
      gesturesEnabled:false
    }
  },
  ProductDescription:{
    screen: ProductDescription,
    navigationOptions:{
      gesturesEnabled:false
    }
  }
});

export default createAppContainer(AppNavigator);
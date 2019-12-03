import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import Home from "../screens/home";
import Profile from "../screens/profile";
import Login from "../screens/Login";
import App from '../App'
import Button from 'react-native'
// import Drawer from '../screens/Drawer';


const Drawer= createDrawerNavigator({

Home:Home,
Profile:Profile


  }
)

const AppNavigator = createStackNavigator({
    
    Home: {
        screen: Drawer,navigationOptions:{
          headerStyle:{
            backgroundColor:"blue",
          },
          headerTintColor:"white",
          headerTitle:"home",
        
        
        }
       
      },
  Profile: {
    screen: Profile,navigationOptions: {
       
      headerStyle:{
        backgroundColor:"blue",
      },
      headerTintColor:"white",
      headerTitle:"profile"
    },
   
  },
 
  
  dashboard: {
    screen: App,
    navigationOptions: {
      headerStyle:{
        backgroundColor:"blue",
      },
      headerTintColor:"white",
      headerTitle:"Register"
    
    }
},
Login: {
  screen: Login,
  navigationOptions: {
     
    headerStyle:{
      backgroundColor:"blue",
    },
    headerTintColor:"white",
    headerTitle:"Login"
  },
},

},{
    initialRouteName: "dashboard",

    
});


export default createAppContainer(AppNavigator);
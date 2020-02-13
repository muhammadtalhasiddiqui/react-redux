import * as React from 'react';
import { Button, View,TouchableOpacity,Text } from 'react-native';
import {Icon} from 'native-base'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



// import { createStackNavigator } from '@react-navigation/stack';

 import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import Home from "../MainComponent/Home/home";
import SignIn from '../MainComponent/SignIn/index';
import SignUp from '../MainComponent/SignUp/index';






function CustomDrawerContent(props) {
 
  return (
    <DrawerContentScrollView  {...props}>
      <View style={{flex:1,flexDirection:'column'}}>

                <View style={{width:'100%',backgroundColor:'#D70F64',paddingTop:'60%',paddingBottom:'8%',marginTop:-10}}>
                <TouchableOpacity style={{height:10,width:'100%'}} onPress={()=>alert('aa')}>
                  <Text style={{paddingLeft:'5%',fontSize:16,color:'white',}}>Login/Create account</Text>
                </TouchableOpacity>
                </View>

            <View style={{flexDirection:'column',paddingLeft:'8%',paddingTop:'10%',borderBottomWidth:1,borderBottomColor:'gray' ,}}>
            <TouchableOpacity onPress={()=>alert('aa')}>
                    <View style={{flexDirection:'row'}} >
                          <View style={{paddingRight:'13%',paddingBottom:'10%'}}>
                              <Icon style={{color:'#D70F64' ,fontSize:22}} name='first-order' type='FontAwesome'/>
                          </View>
                          <View style={{marginRight:'9%'}}>
                              <Text style={{fontSize:18,}}>My orders</Text>
                          </View>
                    </View>
           </TouchableOpacity>
           <TouchableOpacity>
                    <View style={{flexDirection:'row'}} >        
                    <View style={{paddingRight:'10%',paddingBottom:'10%'}}>
                              <Icon style={{color:'#D70F64',fontSize:22}} name='hands-helping' type='FontAwesome5'/>
                          </View>
                          <View  style={{marginRight:'9%'}}>
                               <Text style={{fontSize:18,}}>Helps center</Text>
                          </View>
                    </View>
           </TouchableOpacity>    
             
           <TouchableOpacity>    
                    <View style={{flexDirection:'row',}} >
                        <View style={{paddingRight:'10%',paddingBottom:'10%',}}>
                              <Icon style={{color:'#D70F64',fontSize:22}} name='user-friends' type='FontAwesome5'/>
                          </View>
                          <View  style={{marginRight:'18%'}}>
                              <Text style={{fontSize:18,}}>Invite friends</Text>
                          </View>
                        </View>
            </TouchableOpacity>    
            </View>
            <View style={{paddingLeft:'8%',marginTop:'10%'}}>
              <TouchableOpacity>    
                        <View style={{marginBottom:'4%'}}>
                          <Text style={{fontSize:18,}}>Setting</Text>
                        </View>  
              </TouchableOpacity>  
              <TouchableOpacity>      
                <View>
                  <Text style={{fontSize:16,}}>Terms & Conditions/Privacy</Text>
                </View> 
               </TouchableOpacity>    
            </View>

      </View> 


    </DrawerContentScrollView>

  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <MyDrawer />
    </NavigationContainer>
  );
}
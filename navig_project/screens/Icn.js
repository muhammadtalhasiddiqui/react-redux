import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input,Icon,Button } from 'native-base';
import Butt from './reausableComponents/Button'


class Icn extends React.Component {

constructor(){
super();
this.state={

  name:'Dashboard'

}

}
render(){
  return (
    <View>


<Icon  name="menu"/>
 

       
    </View>
  );
}
}

export default Icn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },

 


});

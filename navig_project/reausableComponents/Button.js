import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import { Content,Button } from 'native-base';


class button extends React.Component {

constructor(){
super();
this.state={



}

}



render(){
  
  const {click,b_text,one,two}=this.props;
  return (
   <View style={one}>
<Button style={{borderRadius:20}}  title="click" onPress={click}> 
   <Text style={two}>{b_text}</Text>
 </Button>
  </View>
  );
}
}

export default button;

 const styles = StyleSheet.create({
 bt:{

  width:"95%",
  alignSelf:"center",
  marginTop:10,
  height:"100%",
  

},

 });


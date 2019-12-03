import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input,Icon,Button } from 'native-base';


class Login extends React.Component {

constructor(props){
super(props);
this.state={

  user:'talha'

}

}
render(){
  return (
    <ScrollView style={styles.container}>


<Text style={styles.txt_color}>Username</Text>
            <View style={styles.input}>
            <Item>
              <Input placeholder="Username" />
            </Item>
            </View>
                 
                     <Text style={styles.txt_color}>password</Text>
                       <View style={styles.input}>
                       <Item last>
                         <Input placeholder="password" />
                       </Item>
                       </View>
          <View style={styles.bt}>
            <Button style={{borderRadius:20}} title="click" onPress={()=>{this.props.navigation.navigate('Home')}}> 
          <Text style={styles.txt_bt}>Login</Text>
           </Button>
           <TouchableOpacity onPress={()=>{this.props.navigation.navigate("dashboard")}}>
           <Text style={styles.bottom_txt}>don't have account register here</Text>
           </TouchableOpacity>
            </View>
            
           
    {/* <Text>{this.state.name}</Text>
<Button title="click" onPress={()=>{this.props.navigation.navigate('Home')}}/> */}
    </ScrollView>
  );
}
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  input:{
          borderColor:"grey",
          borderWidth:1,
          width:"95%",
          alignSelf:"center"
},

txt_color:{
    
    color:"grey",
    marginTop:10,
    marginLeft:10,
    marginBottom:10
},

bt:{

    width:"95%",
    alignSelf:"center",
    marginTop:10,
    height:"100%",
    

},

txt_bt:{

    marginLeft:"40%",
    color:"#fff"

},

bottom_txt:{
 textAlign:"center",
 alignSelf:"center",
color:"blue",
borderBottomColor:"blue",
borderBottomWidth:1,
width:"67%",
marginTop:10
}



});

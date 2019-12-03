import React from 'react';
import { StyleSheet, Text, View,Button,props } from 'react-native';


class Profile extends React.Component {

constructor(){
super(props);
this.state={

  name:'Profile'

}

}
render(){
  // console.log(this.props.navigation.state.params.name,"=========")
  return (
    <View style={styles.container}>
    <Text>{this.state.name}</Text>
    {/* <Text>{JSON.stringify(navigation.getParam("name"))}</Text> */}
  
<Button title="click" onPress={()=>{this.props.navigation.navigate('Home')}}/>
    </View>
  );
}
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

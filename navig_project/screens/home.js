import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {updateUser} from '../Redux/Actions/AuthAction'
import { connect } from 'react-redux';


class Home extends React.Component {

constructor(){
super();
this.state={

  user:'home'

}

}

componentDidMount(){
  console.log('this.props===>',this.props);
this.props.updateUser({name:"talha",age:22})

}

componentWillReceiveProps(){
  console.log("user*****",this.props.user)
}


render(){
  
  return (
    <View style={styles.container}>
    <Text>{this.state.name}</Text>
<Button title="click" onPress={()=>{this.props.navigation.openDrawer()}}/>
    </View>
  );
}
}

const mapStateToProps=(state)=>{
  console.log('state', state);
return {
  user : state.Authreducer.user
}
}

const mapDispatchToProps=(dispatch)=>{
  return {
    updateUser:(user)=>dispatch(updateUser(user))
  }

}


export default connect(mapStateToProps,mapDispatchToProps)(Home);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

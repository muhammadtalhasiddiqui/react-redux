import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Icon, Button } from 'native-base';
// import Butt from './reausableComponents/Button';
import { Provider } from 'react-redux';
import store from './Redux/store';


class App extends React.Component {




  constructor(props) {
    super(props);
    this.state = {
    }

  }
  render() {

    console.log(this.prop)
    // alert(this.props.pro);

    return (
      <ScrollView style={styles.container}>
        <View>

          <Text style={styles.txt_color}>Username</Text>
          <View style={styles.input}>
            <Item>
              <Input placeholder="pick your Username" />
            </Item>
          </View>

          <Text style={styles.txt_color}>Email or phone</Text>
          <View style={styles.input}>
            <Item last>
              <Input placeholder="Email or phone" />
            </Item>
          </View>
          <Text style={styles.txt_color}>password</Text>
          <View style={styles.input}>
            <Item last>
              <Input placeholder="password" />
            </Item>
          </View>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
            <Text style={styles.bottom_txt}>  go back to register screen</Text>
          </TouchableOpacity>
          {/* <Butt one={styles.bt} two={styles.txt_bt} b_text="Register" click ={()=>{{this.props.navigation.goBack()}}}/> */}

        </View>

      </ScrollView>

    );





    //   return (

    //     <Provider store={store}>
    //        <Outwork/>
    //        </Provider>
    // );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  input: {
    borderColor: "grey",
    borderWidth: 1,
    width: "95%",
    alignSelf: "center"
  },

  txt_color: {

    color: "grey",
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },

  bt: {

    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    height: "100%",


  },

  txt_bt: {

    marginLeft: "40%",
    color: "white"

  },

  bottom_txt: {
    textAlign: "center",
    alignSelf: "center",
    color: "blue",
    borderBottomColor: "blue",
    borderBottomWidth: 1,
    width: "55%",
    marginTop: 10
  }



});

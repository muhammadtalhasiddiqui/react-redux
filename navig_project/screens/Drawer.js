import React from 'react'
import { ScrollView,StyleSheet,SafeAreaView} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right ,View} from 'native-base';

 const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
       <Container>
        <Header style={{height:'70%'}}/>
        <Content>
          <View>
            <CardItem style={{margin:0,padding:0}}>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </View>
        </Content>
      </Container>
      {/* <DrawerItems {...props} /> */}
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CustomDrawerContentComponent;
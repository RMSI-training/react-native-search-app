import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
export default function App() {
  const [visible, setVisible] = useState(false);
  function handlePress() {
    setVisible(!visible)
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='home' component={HomeScreen} options={{ title: 'Home' }}>
        </Drawer.Screen>
        <Drawer.Screen name='profile' component={ProfileScreen}>
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <ScrollView onPress={value => alert(value)}>
    //     <Text > Item 1</Text>
    //     <Text> Item 1</Text>
    //     <Text> Item 1</Text>
    //   </ScrollView>
    //   <Button title='Login' onPress={handlePress} />
    //   <Modal isVisible={visible} >
    //     <View>
    //       <SMSComponent />

    //       <View>
    //         <Button title='Hide modal' onPress={handlePress}></Button>
    //       </View>
    //     </View>
    //   </Modal>
    // </View>
  );
}
const HomeScreen = ({navigation}) => {
  return (<Button title='go back' onPress={() => navigation.navigate('profile')}></Button>)

}
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is home screen</Text>
}
const styles = StyleSheet.create({
  input1: {
    width: '90%',
    fontSize: 50
  },
  container: {
    flex: 1,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

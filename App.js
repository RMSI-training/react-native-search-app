import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AboutScreen from './About';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
export default function App() {
  const [visible, setVisible] = useState(false);
  function handlePress() {
    setVisible(!visible)
  }
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
const HomeScreen = ({navigation}) => {
  return (<Button title='go back' onPress={() => {
    console.log(navigation);
    navigation.navigate('profile');
  }}></Button>)
}

const ProfileScreen = ({ navigation, ruote }) => {
  return <Text>this is profile screen.</Text>
}
const Stack1 = () => {

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

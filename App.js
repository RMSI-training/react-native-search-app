import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Location from "expo-location";
import { getLocaleDirection } from 'react-native-web/dist/cjs/modules/useLocale';
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
  );
}
const HomeScreen = ({ navigation }) => {
  
  async function getLocation() {
    alert("Error", 'something went wrong');
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
      alert("Error", 'something went wrong');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    alert("result", location);
  }
  return (<View>
    <Button title='go back' onPress={() => navigation.navigate('profile')}></Button>
    <Button title='Get location' onPress={() => getLocation()}></Button>
  </View>)

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

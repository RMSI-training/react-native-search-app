import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';
import Login from "./Login";
import SMSComponent from './Sms';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NativeScreenNavigationContainer } from 'react-native-screens';
const Stack = createNativeStackNavigator();
export default function App() {
  const [visible, setVisible] = useState(false);
  function handlePress() {
    setVisible(!visible)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} options={{ title: 'Home' }}>
        </Stack.Screen>
        <Stack.Screen name='profile' component={ProfileScreen}>
        </Stack.Screen>
      </Stack.Navigator>
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

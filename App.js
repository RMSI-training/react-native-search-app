import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Location1 from './Location';
import * as Location from 'expo-location';
import { useEffect } from 'react/cjs/react.development';
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
const HomeScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (<View><Text>This is some text</Text>
    {/* <Button title='go back1' onPress={() => navigation.navigate('profile')}>
  </Button> */}
  <Text style={styles.paragraph}>This is a location :{text}</Text>
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

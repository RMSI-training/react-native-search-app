import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
        <Stack.Screen name='profile' component={profileScreen}>
        </Stack.Screen>
      </Stack.Navigator>
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
const HomeScreen = ({ navigation }) => {
  return (<Button title='go back' onPress={() => navigation.navigate('profile')}></Button>)

}
const profileScreen = ({ navigation, route }) => {
  return (
    <View><Button title='go home' onPress={() => navigation.navigate('home')}></Button>
      <Text>This is profile screen</Text></View>)
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

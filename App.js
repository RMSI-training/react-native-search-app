import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Login from "./Login";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  input1:{
    width:'90%',
    fontSize:50
  },
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

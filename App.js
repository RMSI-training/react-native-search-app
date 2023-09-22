import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';
import Login from "./Login";
export default function App() {
  const [visible, setVisible] = useState(false);
  function handlePress() {
    setVisible(!visible)
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title='Login' onPress={handlePress} />
      <Modal isVisible={visible} >
        <View>
          <Login />
          <View>
            <Button title='Hide modal' onPress={handlePress}></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
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

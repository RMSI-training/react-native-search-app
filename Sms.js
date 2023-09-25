import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as SMS from "expo-sms";
import { useState } from 'react';


function SMSSender(params) {
    const [formdata, setFormData] = useState({
        number:1234444,
        message: 'this is a message'
    })
    async function sendSMS(params) {
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            SMS.sendSMSAsync('858787', "this is a warning")
        }
    }
    function updateFormData() {
        
    }
    return (
        <View>
            <TextInput placeholder='Enter number' style={styles.input1} value={formdata.number}
                name='number' onChangeText={updateFormData} />
            <TextInput placeholder='Enter message' style={styles.input1} value={formdata.message}
                name='message' onChangeText={updateFormData} />
            <Button title='send SMS' onPress={sendSMS}></Button>

        </View>
    )
}
const styles = StyleSheet.create({
    input1: {
        backgroundColor: '#fff',
        width: '90%'
        // fontSize: 
    }
});
export default SMSSender;

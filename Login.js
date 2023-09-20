import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { Picker } from "@react-native-picker/picker";
export default function Login() {
    const [formdata, setFormData] = useState({});
    function handlePress() {
        alert('handlePress')
    }
    function updateFormData() {
        alert('updateFormData')
    }
    return (
        <View>
            <TextInput placeholder='click here' style={styles.input1} value={formdata.firstname}
                onChangeText={updateFormData} />
            <Picker selectedValue={formdata.selectedTech} onValueChange={(selected) => {
                setFormData(...formdata, {selectedTech:selected})
                return alert(selected)}}>
                <Picker.Item label='Java' value='Java' />
                <Picker.Item label='React' value='React' />
                <Picker.Item label='Vue.js' value='VUe.js' />

            </Picker>
            <Button title='Submit' onPress={handlePress} />
        </View>)
}

const styles = StyleSheet.create({
    input1: {
        width: '90%',
        fontSize: 50
    }
});
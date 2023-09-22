import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { Picker } from "@react-native-picker/picker";
import Slider from '@react-native-community/slider';
export default function Login() {
    const [formdata, setFormData] = useState({
        email: 'Pariweshg@gmail.com',
        password:"test123"
    });
    const [slider, setSlider] = useState(10);

    function updateFormData(event) {
        alert(event);
    }
    return (
        <View>
            <TextInput placeholder='Enter Email' style={styles.input1} value={formdata.email}
                onChangeText={updateFormData} />
            <TextInput secureTextEntry={true} style={styles.input1} placeholder='Enter Password'
                onChangeText={updateFormData} value={formdata.password} />
            <Picker selectedValue='Vue.js' onValueChange={(selected) => {
                alert(selected);
                setFormData({ selectedTech: selected })
            }}>
                <Picker.Item label='Java' value='Java' />
                <Picker.Item label='React' value='React' />
                <Picker.Item label='Vue.js' value='Vue.js' />
            </Picker>
            <Slider value={slider} minimumValue={0} maximumValue={100}
                minimumTrackTintColor='0f0'
                maximumTrackTintColor='f00' onValueChange={currentValue => setSlider(currentValue)} />
            <Text>{slider}</Text>

        </View>)
}

const styles = StyleSheet.create({
    input1: {
        backgroundColor: '#fff',
        width: '90%'
        // fontSize: 
    }
});
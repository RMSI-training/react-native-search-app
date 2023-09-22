import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { Picker } from "@react-native-picker/picker";
import Slider from '@react-native-community/slider';
export default function Login() {
    const [formdata, setFormData] = useState({});
    const [slider, setSlider] = useState(10);
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
                maximumTrackTintColor='f00' onValueChange={currentValue=> setSlider(currentValue)}/>
            <Text>{slider}</Text>
            <Button title='Submit' onPress={handlePress} />
        </View>)
}

const styles = StyleSheet.create({
    input1: {
        width: '90%',
        fontSize: 50
    }
});
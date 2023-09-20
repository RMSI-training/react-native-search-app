import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Login() {
    return (<View>
        <TextInput placeholder='click here' style={styles.input1} />
        <Button title='Submit' />
    </View>)
}

const styles = StyleSheet.create({
    input1: {
        width: '90%',
        fontSize: 50
    }
});
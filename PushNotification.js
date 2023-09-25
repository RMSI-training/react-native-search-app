import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import * as Notifications from "expo-notifications";


function PushNotification() {
    const registerForPushNotificationsAsync = async () => {
        let token;
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250],
            lightColor: '#FF3245'
        })
        const { status: existingStatus } = await Notifications.getPermissionsAsync();//first check if permission is already granted
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            alert("failed");
        }
    }
    function sendPushNotification() {
        registerForPushNotificationsAsync().then(token => console.log(token));
        Notifications.scheduleNotificationAsync({
            content: {
                title: "title1",
                body: 'this is the body',
                data: { fname: 'Pariwesh' }
            },
            trigger: { seconds: 3 }
        })
    }
    return (
        <Button title='send notification' onPress={sendPushNotification} />
    );


}

export default PushNotification;
import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase/config.js'
import styles from './estilo';

export default function HomeScreen({navigation}) {
    const onLogoutPress = () => {
        auth.signOut().then((respose) => {
            navigation.navigate('Login')
        })
    }


    return (
        <View>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLogoutPress()}>
                    <Text style={styles.buttonTitle}>Sair</Text>
                </TouchableOpacity>
            <Text style={styles.title}>Home Page</Text>
        </View>
    )
}
import React from "react"
import { View, Text } from 'react-native'
import estilos from './estilo'

export default function Titulo(){
    return(
        <View style={estilos.boxTitle}>
            <Text style={estilos.textTitle}>NOME DO APP</Text>
        </View>
    );
}
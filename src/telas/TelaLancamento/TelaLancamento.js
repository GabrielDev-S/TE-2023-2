import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './estilo'

const CadastroLancamentos = () => {
    const [data, setData] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleCadastro = () => {
      // Aqui você pode realizar as ações necessárias para salvar o lançamento contábil
      console.log('Lançamento cadastrado:', data, valor, tipo, descricao);
    };

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <TextInput
                    style={styles.input}
                    placeholder="Data"
                    value={data}
                    onChangeText={setData}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Valor"
                    value={valor}
                    onChangeText={setValor}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Tipo (Débito ou Crédito)"
                    value={tipo}
                    onChangeText={setTipo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Descrição"
                    value={descricao}
                    onChangeText={setDescricao}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onSavePress()}>
                    <Text style={styles.buttonTitle}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onCancelPress()}>
                    <Text style={styles.buttonTitle}>Cancelar</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    );
  };

export default CadastroLancamentos;
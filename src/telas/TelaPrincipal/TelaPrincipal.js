// import React from 'react'
// import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { auth } from '../../firebase/config.js'
// import styles from './estilo';

// export default function HomeScreen({navigation}) {
//     const onLogoutPress = () => {
//         auth.signOut().then((respose) => {
//             navigation.navigate('Login')
//         })
//     }


//     return (
//         <View>
//             <TouchableOpacity
//                     style={styles.button}
//                     onPress={() => onLogoutPress()}>
//                     <Text style={styles.buttonTitle}>Sair</Text>
//                 </TouchableOpacity>
//             <Text style={styles.title}>Home Page</Text>
//         </View>
//     )
// }

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

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
      <Button title="Incluir" onPress={handleCadastro} />
      <Button title="Voltar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default CadastroLancamentos;
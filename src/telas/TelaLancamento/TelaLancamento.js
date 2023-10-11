import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

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
    <View>
      <TextInput
        placeholder="Data"
        value={data}
        onChangeText={setData}
      />
      <TextInput
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
      />
      <TextInput
        placeholder="Tipo (Débito ou Crédito)"
        value={tipo}
        onChangeText={setTipo}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

export default CadastroLancamentos;
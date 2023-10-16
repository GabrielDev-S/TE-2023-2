import React from 'react'
import { View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import styles from './estilo'

const PickerTypeEntrie = () => {
    const placeholder = {
        label: 'Selecione uma opção...',
        value: null,
        color: '#9EA0A4',
    };

    const items = [
        { label: 'Despesa', value: 'despesa' },
        { label: 'Receita', value: 'receita' },
    ];

    return (
        <View style={styles.container}>
            <RNPickerSelect
                placeholder={placeholder}
                items={items}
                onValueChange={(value) => {
                    console.log(value);
                }}
            />
        </View>
    );
}

export default PickerTypeEntrie;
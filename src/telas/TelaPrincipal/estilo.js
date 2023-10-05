import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        alignSelf: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: 'red',
        marginRight: 20,
        marginTop: 20,
        width: 40,
        height: 30,
        borderRadius: 5,
        alignSelf: 'flex-end',
        alignItems: "center",
        justifyContent: 'center'
    }
})
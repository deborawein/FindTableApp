import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
const logo = require('../assets/logo.png')

export function Search(props) {
    return (
    <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Restaurant' />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Find a Table</Text>
            </TouchableOpacity>
        </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFA3AC',
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderWidth: 1,
        borderColor: '#BFBFC1',
        borderRadius: 5,
        fontSize: 12,
        marginHorizontal: 20,
        marginTop: 15,
    },
    button: {
        backgroundColor: '#FF707E',
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
})
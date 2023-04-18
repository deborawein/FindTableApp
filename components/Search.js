import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

const logo = require('../assets/logo.png')

export function Search(props) {
    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <TextInput style={styles.input} placeholder='Restaurant' />
                <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>FIND A TABLE</Text>
          </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFA3AC',
    },
    searchBox: {
        marginHorizontal: 20,
        display: 'flex'
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderWidth: 1,
        borderColor: '#BFBFC1',
        borderRadius: 5,
        fontSize: 12,
        // marginHorizontal: 20,
        marginTop: 15,
    },
    button: {
        backgroundColor: '#FF707E',
        padding: 10,
        marginHorizontal: 0,
        marginVertical: 15,
        borderRadius: 10,
      },
      buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
      },
})
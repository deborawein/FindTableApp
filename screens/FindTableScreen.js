import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//Components
import { Header } from '../components/Header'
import { Search } from '../components/Search';

export function FindTableScreen(props) {

    const navigation = useNavigation();

    return (
        <View>
            <Header />
            <Search />
            <TouchableOpacity style={styles.button} onPress={() => props.addData()}>
                <Text style={styles.buttonText}>Add some data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => props.signOutHandler()}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFA3AC',
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
import { View, Text, Pressable, StyleSheet } from "react-native"

export function EditButton(props) {
    const data = {
        id: props.id,
        name: props.name,
        guest: props.guest,
        date: props.date,
        time: props.time,
        firstname: props.firstname,
        lastname: props.lastname,
        phone: props.phone,
        image: props.image
    }
    return (
        <View>
            <Pressable style={styles.button} onPress={() => props.handler(data)}>
               <Text style={styles.buttonText}>EDIT</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF707E',
        padding: 15,
        borderRadius: 15,
        marginTop: 40,
        marginHorizontal: 20
        
    }, 
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
})
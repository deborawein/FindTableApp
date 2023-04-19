import { View, Text, Pressable, StyleSheet, Image } from "react-native-web"


export function InfoListItem(props) {
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
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: 20
    }, 
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
})
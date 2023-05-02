import { View, Text, Pressable, StyleSheet } from "react-native"
import { Image } from 'expo-image';

export function RestaurantListItem(props) {
    const data = {
        id: props.id,
        name: props.name,
        type: props.type,
        suburb: props.suburb,
        state: props.state,
        image: props.image
    }
    return (
        <View style={styles.itemList}>
            <Pressable onPress={() => props.handler(data)}>
            <Image source={props.image} style={styles.imageRestaurant} />
                <Text style={styles.itemName}>{props.name}</Text>
                <Text style={styles.itemDescription}>{props.type} • {props.suburb}, {props.state}</Text>
            </Pressable>
        </View>

    )
}
const styles = StyleSheet.create({
    itemList: {
        padding: 10,
    },
    imageRestaurant: {
        contentFit: 'cover',
        width: "100%",
        height: 150,
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingTop: 10,
    },
    itemDescription: {
        fontSize: 14,
    },

})
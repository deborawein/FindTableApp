import { View, Text, Pressable, StyleSheet, Image } from "react-native"


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
        padding: 20,
    },
    imageRestaurant: {
        resizeMode: 'cover',
        width: "100%",
        height: 200,
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 10,
    },
    itemDescription: {
        fontSize: 11,
    },

})
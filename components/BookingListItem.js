import { View, Text, Pressable, StyleSheet } from "react-native"
import { Image } from 'expo-image';

//incons
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export function BookingListItem(props) {
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
            <Pressable onPress={() => props.handler(data)}>
                <View style={styles.container}>
                    <Image source={props.image} style={styles.imageRestaurant} />
                    <Text style={styles.itemName}>{props.name}</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.rowLeft}>
                        <Text style={styles.itemLeft}>
                            <FontAwesome5 name="calendar-check" size={20} color="#FF707E" />  {props.date} - {props.time}
                        </Text>
                    </View>
                    <View style={styles.rowRight}>
                        <Text style={styles.itemRight}>
                            <FontAwesome name="group" size={20} color="#FF707E" />  {props.guest} people
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    row: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginVertical: 10,

    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    imageRestaurant: {
        resizeMode: 'cover',
        width: '100%',
        height: 150
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingTop: 10,
    },
    separatorItem: {
        backgroundColor: '#CCCCCC',
        height: 1,
    },
    rowRight: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    itemRight: {
        fontSize: 14,
        textAlign: 'right'
    },
    rowLeft: {
        flex: 1,
        justifyContent: 'flex-start',
        textAlign: 'left',
        fontSize: 14,
    },

})
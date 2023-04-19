import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useContext, useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";

//context
import { AuthContext } from "../context/AuthContext";
import { DBContext } from '../context/DBContext';
//firebase
import { addDoc, collection } from 'firebase/firestore'

const imageRestaurant = require('../assets/restaurant.png');

export function UpdateScreen(props) {
    const authStatus = useContext(AuthContext)
    const DB = useContext(DBContext)
    const routeUpdate = useRoute();
    const navigation = useNavigation()

    const { id, name, guest, date, time, firstname, lastname, phone } = routeUpdate.params

    [guest, setGuest] = useState('')
    [date, setDate] = useState('')
    [time, setTime] = useState('')

    [firstname, setFirstname] = useState('')
    [lastname, setLastname] = useState('')
    [phone, setPhone] = useState('')


    const saveReservation = async () => {
        const reservationObj = { name: name, guest: guest, date: date, time: time, firstname: firstname, lastname: lastname, phone: phone }
        //ad note to firebase
        const path = `users/${authStatus.uid}/reservations`
        const ref = await addDoc(collection(DB, path), reservationObj)
        navigation.reset({ index: 0, routes: [{ name: 'HomeTab' }] })
    }

    return (
        <View style={styles.page}>
            <Image source={imageRestaurant} style={styles.imageRestaurant} />
            <Text style={styles.restName}>{name}</Text>
            <View style={styles.row}>
                <View style={styles.leftBox}>
                    <Text style={styles.inputText}>Guests</Text>
                    <TextInput
                        style={styles.input}
                        value={guest}
                        onChangeText={(val) => setGuestUp(val)}
                    />
                </View>
                <View style={styles.rightBox}>
                    <Text style={styles.inputText}>Date</Text>
                    <TextInput
                        style={styles.input}
                        value={dateUp}
                        onChangeText={(val) => setDate(val)}
                    />
                </View>
            </View>

            <Text style={styles.inputText}>Booking Time</Text>
            <TextInput
                style={styles.input}
                value={time}
                onChangeText={(val) => setTime(val)}
            />
            <Text style={styles.contact}>Contact Info</Text>
            <View style={styles.row}>
                <View style={styles.leftBox}>
                    <Text style={styles.inputText}>First name</Text>
                    <TextInput
                        style={styles.input}
                        value={firstname}
                        onChangeText={(val) => setFirstname(val)}
                    />
                </View>
                <View style={styles.rightBox}>
                    <Text style={styles.inputText}>Last name</Text>
                    <TextInput
                        style={styles.input}
                        value={lastname}
                        onChangeText={(val) => setLastname(val)}
                    />
                </View>
            </View>

            <Text style={styles.inputText}>Phone number</Text>
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={(val) => setPhone(val)}
            />

            <TouchableOpacity style={styles.button}
            onPress={() => saveReservation()}
            >
                <Text style={styles.buttonText}>RESERVE</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    page: {
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: "center",
        paddingVertical: 20
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 20,
    },
    imageRestaurant: {
        resizeMode: 'contain',
        width: '100%',
        flexDirection: 'column',
    },
    restName: {
        fontWeight: 'bold',
        fontSize: 18,
        flexDirection: 'column',
    },
    restDesc: {
        fontSize: 12,
        flexDirection: 'column',
    },
    contact: {
        fontWeight: 'bold',
        fontSize: 14,
        flexDirection: 'column',
        paddingTop: 30,
    },
    leftBox: {
        flex: 1,
        marginEnd: 5,
    },
    rightBox: {
        flex: 1,
        marginStart: 5,
    },
    inputText: {
        color: 'black',
        fontSize: 12,
        flexDirection: 'column',
        display: 'flex',
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderWidth: 1,
        borderColor: '#BFBFC1',
        borderRadius: 5,
        fontSize: 12,
        flex: 1,
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
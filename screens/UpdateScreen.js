import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useContext, useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";

//context
import { AuthContext } from "../context/AuthContext";
import { DBContext } from '../context/DBContext';
//firebase
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'


export function UpdateScreen(props) {
    const navigation = useNavigation()
    const authStatus = useContext( AuthContext )
    const DB = useContext( DBContext )
    const routeUpdate = useRoute();

    const { id, name, guest, date, time, firstname, lastname, phone, image } = routeUpdate.params

    const [guestUp, setGuestUp] = useState(guest)
    const [dateUp, setDateUp] = useState(date)
    const [timeUp, setTimeUp] = useState(time)

    const [firstnameUp, setFirstnameUp] = useState(firstname)
    const [lastnameUp, setLastnameUp] = useState(lastname)
    const [phoneUp, setPhoneUp] = useState(phone)

    const updateReservation = async () => {
        const path = `users/${authStatus.uid}/reservations`
        await updateDoc( doc( DB, path, id), {  guest: guestUp, date: dateUp, time: timeUp, firstname: firstnameUp, lastname: lastnameUp, phone: phoneUp } )
        navigation.goBack()
      }



    return (
        <View style={styles.page}>
            <Text style={styles.restName}>{name}</Text>
            <View style={styles.row}>
                <View style={styles.leftBox}>
                    <Text style={styles.inputText}>Guests</Text>
                    <TextInput
                        style={styles.input}
                        value={guestUp}
                        onChangeText={(val) => setGuestUp(val)}
                    />
                </View>
                <View style={styles.rightBox}>
                    <Text style={styles.inputText}>Date</Text>
                    <TextInput
                        style={styles.input}
                        value={dateUp}
                        onChangeText={(val) => setDateUp(val)}
                    />
                </View>
            </View>

            <Text style={styles.inputText}>Booking Time</Text>
            <TextInput
                style={styles.input}
                value={timeUp}
                onChangeText={(val) => setTimeUp(val)}
            />
            <Text style={styles.contact}>Contact Info</Text>
            <View style={styles.row}>
                <View style={styles.leftBox}>
                    <Text style={styles.inputText}>First name</Text>
                    <TextInput
                        style={styles.input}
                        value={firstnameUp}
                        onChangeText={(val) => setFirstnameUp(val)}
                    />
                </View>
                <View style={styles.rightBox}>
                    <Text style={styles.inputText}>Last name</Text>
                    <TextInput
                        style={styles.input}
                        value={lastnameUp}
                        onChangeText={(val) => setLastnameUp(val)}
                    />
                </View>
            </View>

            <Text style={styles.inputText}>Phone number</Text>
            <TextInput
                style={styles.input}
                value={phoneUp}
                onChangeText={(val) => setPhoneUp(val)}
            />

            <TouchableOpacity style={styles.button}
            onPress={() => updateReservation()}
            >
                <Text style={styles.buttonText}>EDIT</Text>
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
        padding: 10,
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
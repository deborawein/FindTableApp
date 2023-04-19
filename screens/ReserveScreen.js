import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useContext, useEffect, useState } from 'react'
//context
import { AuthContext } from "../context/AuthContext";
import { DBContext } from '../context/DBContext';


import { TimeButton } from '../components/TimeButton';

const imageRestaurant = require('../assets/restaurant.png');



export function ReserveScreen(props) {
    const authStatus = useContext(AuthContext)
    const DB = useContext(DBContext)

    const [nameRest, setNameRest] = useState('')
    const [time, setTime] = useState('')
    const [guest, setGuest] = useState('')
    const [dateReserve, setDateReserve] = useState('')

    const [disabled, setDisabled] = useState(false)
    useEffect(() => {
        if (disabled) {
            setDisabled(true)
        }
        else {
            setDisabled(false)
        }
    })

    const saveReservation = async () => {
        const reservationObj = { name: nameRest, time: time, guest: guest, dateReserve: dateReserve }
        //ad note to firebase
        const path = `users/${authStatus.uid}/reservations`
        const ref = await addDoc(collection(DB, path), reservationObj)
    }

    const route = useRoute();
    const { id, name, type, suburb, state } = route.params
    return (
        <View>
            <View style={styles.container}>
                <Image source={imageRestaurant} style={styles.imageRestaurant} />
                <Text style={styles.itemName}>{name}</Text>
                <Text style={styles.itemDescription}>{type} • {suburb}, {state}</Text>
            </View>

            <View style={styles.row}>
                <View style={styles.inputBox}>
                    <Text style={styles.inputTextGuest}>Guests</Text>
                    <TextInput
                        style={styles.inputGuest}
                        placeholder="2"
                        value={guest}
                        onChangeText={(val) => setGuest(val)}
                    />
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.inputTextDate}>Date</Text>
                    <TextInput
                        style={styles.inputDate}
                        placeholder="12/02/2023"
                        value={dateReserve}
                        onChangeText={(val) => setDateReserve(val)}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.inputBox}>
                    <Text style={styles.inputTextGuest}>Please choose a time below:</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.inputBox}>
                    <TouchableOpacity
                        style={(disabled) ? styles.timeButton : styles.timeButtonDisabled}
                        onPress={() => setDisabled(!disabled)}
                    >
                        <Text style={styles.timeButtonText}> 18:00 </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputBox}>
                    <TimeButton time="18:30" />
                </View>
                <View style={styles.inputBox}>
                    <TimeButton time="19:00" />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.inputBox}>
                    <TimeButton time="19:30" />
                </View>
                <View style={styles.inputBox}>
                    <TimeButton time="20:00" />
                </View>
                <View style={styles.inputBox}>
                    <TimeButton time="20:30" />
                </View>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>RESERVE</Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        display: 'flex'
    },
    imageRestaurant: {
        resizeMode: 'contain',
        width: '100%',
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    itemDescription: {
        fontSize: 11,
    },
    row: {
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",

    },
    inputBox: {
        // margin: 10,
        flex: 1,
        margin: 5,
    },
    inputTextGuest: {
        color: 'black',
        fontSize: 12,
        marginTop: 10,
        flexDirection: 'column',
        display: 'flex',
    },
    inputGuest: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderWidth: 1,
        borderColor: '#BFBFC1',
        borderRadius: 5,
        fontSize: 12,
        flex: 1,
    },
    inputTextDate: {
        color: 'black',
        fontSize: 12,
        marginTop: 10,
        flexDirection: 'column',
        display: 'flex',
    },
    inputDate: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderWidth: 1,
        borderColor: '#BFBFC1',
        borderRadius: 5,
        fontSize: 12,
        flex: 1,
    },
    timeButton: {
        backgroundColor: '#FF707E',
        padding: 10,
        borderRadius: 10,
                borderColor: '#999999',
        borderWidth: 1,
    },

    timeButtonDisabled: {
        backgroundColor: '#BFBFC1',
        padding: 10,
        borderRadius: 10,
        borderColor: '#999999',
        borderWidth: 1,
    },
    timeButtonText: {
        color: 'black', 
        textAlign: 'center'

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
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useContext, useEffect, useState } from 'react'
//context
import { AuthContext } from '../context/AuthContext';
//components
import { TimeButton } from '../components/TimeButton';

const imageRestaurant = require('../assets/restaurant.png');



export function ReserveScreen(props) {
    const authStatus = useContext(AuthContext)

    useEffect(() => {
        if (!authStatus) {
          navigation.reset({ index: 0, routes: [{ name: "Login" }] })
        }
        console.log(authStatus)
      }, [authStatus])

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
                    />
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.inputTextDate}>Date</Text>
                    <TextInput
                        style={styles.inputDate}
                        placeholder="12/02/2023"
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
                    <TimeButton time="18:00" />
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
        marginHorizontal: 80,
        marginVertical: 30,
        borderRadius: 10,
        flexDirection: 'column',
        display: 'flex',
    },

    timeButtonDisabled: {
        backgroundColor: '#BFBFC1',
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        flexDirection: 'column',
        display: 'flex',
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
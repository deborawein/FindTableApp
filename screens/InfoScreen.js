import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useContext, useEffect, useState } from 'react'
//components
import { InfoListItem } from '../components/InfoListItem';
//context
import { AuthContext } from "../context/AuthContext";
import { DBContext } from '../context/DBContext';
//incons
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { deleteDoc, doc, collection, updateDoc } from 'firebase/firestore'


export function InfoScreen(props) {
    const authStatus = useContext(AuthContext)
    const DB = useContext(DBContext)
    const routeInfo = useRoute();
    const navigation = useNavigation()

    const { id, name, guest, date, time, firstname, lastname, phone, image } = routeInfo.params

    const ListClickHandler = (data) => {
        console.log(data)
        navigation.navigate("Edit", data)
    }

    const cancelReservation = async () => {
        const path = `users/${authStatus.uid}/reservations`
        await deleteDoc(doc( DB, path, id ) )
        navigation.goBack()
      }


    return (
        <View>

            <View style={styles.titleBox}>
                <Text style={styles.title}>Reservation</Text>
                <Text style={styles.restaurant}>{name}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.bookingText}><FontAwesome5 name="calendar-check" size={20} color="#FF707E" />  {date} at {time} </Text>
                <Text style={styles.bookingText}><FontAwesome name="group" size={20} color="#FF707E" />  {guest} people</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.contactTitle}>Contact Info</Text>
                <Text style={styles.contactText}>{firstname} {lastname}</Text>
                <Text style={styles.contactText}>{phone}</Text>
            </View>
            <InfoListItem
                id={id}
                name={name}
                date={date}
                guest={guest}
                time={time}
                firstname={firstname}
                lastname={lastname}
                phone={phone}
                image={image}
                handler={ListClickHandler}
            />
            <TouchableOpacity style={styles.button} onPress={ () => cancelReservation() }>
                <Text style={styles.buttonText} >CANCEL BOOKING</Text>
            </TouchableOpacity>
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    titleBox: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    restaurant: {
        fontSize: 12,
        textAlign: 'center',
    },
    box: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    bookingText: {
        fontSize: 12,
        paddingVertical: 5,
        fontWeight: 'bold'
    },
    contactTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    contactText: {
        fontSize: 12,
    },
    buttonBox: {
        padding: 20,
    },
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
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useContext, useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";

//context
import { AuthContext } from "../context/AuthContext";
import { DBContext } from '../context/DBContext';
//incons
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export function InfoScreen(props) {
    const authStatus = useContext(AuthContext)
    const DB = useContext(DBContext)
    const routeInfo = useRoute();
    const navigation = useNavigation()

    const { id, name, guest, date, time, firstname, lastname, phone } = routeInfo.params

    const ListClickHandler = (data) => {
        navigation.navigate("Update", data)
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
                <TouchableOpacity style={styles.button}
                          onPress={
                            () => ListClickHandler(
                              {
                                id: {id}, 
                                name: {name}, 
                                guest: {guest}, 
                                date: {date}, 
                                firstname: {firstname}, 
                                lastname: {lastname}, 
                                phone: {phone}
                              }
                            )
                          }
                >
                    <Text style={styles.buttonText}>EDIT</Text>
                </TouchableOpacity>
            {/* <View style={styles.buttonBox}> */}
                <TouchableOpacity style={styles.button}
                // onPress={() => navigation.navigate('Update')}
                >
                    <Text style={styles.buttonText}>CANCEL</Text>
                </TouchableOpacity>
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    titleBox: {
        flex: 1,
        padding: 20,
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
        flex: 1,
        padding: 20,
    },
    bookingText: {
        fontSize: 12,
        paddingVertical: 10,
    },
    contactTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    contactText: {
        fontSize: 12,
    },
    buttonBox:{
        padding: 20,

    },
    button: {
        backgroundColor: '#FF707E',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20
    }, 
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

})
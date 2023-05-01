import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Modal, Alert, Pressable } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useContext, useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";

//context
import { AuthContext } from "../context/AuthContext";
import { DBContext } from '../context/DBContext';
//firebase
import { addDoc, collection } from 'firebase/firestore'

export function ReserveScreen(props) {
    const authStatus = useContext(AuthContext)
    const DB = useContext(DBContext)
    const routeRest = useRoute();
    const navigation = useNavigation()

    const { id, name, type, suburb, state, image } = routeRest.params

    const [guest, setGuest] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [phone, setPhone] = useState('')

    const [modalVisible, setModalVisible] = useState(false);


    const saveReservation = async () => {
        const reservationObj = { name: name, guest: guest, date: date, time: time, firstname: firstname, lastname: lastname, phone: phone, image: image }
        //ad note to firebase
        const path = `users/${authStatus.uid}/reservations`
        const ref = await addDoc(collection(DB, path), reservationObj)
    }


    return (
        <ScrollView>
            <View style={styles.page}>
                <Image source={image} style={styles.imageRestaurant} />
                <Text style={styles.restName}>{name}</Text>
                <Text style={styles.restDesc}>{type} • {suburb}, {state}</Text>
                <View style={styles.row}>
                    <View style={styles.leftBox}>
                        <Text style={styles.inputText}>Guests</Text>
                        <TextInput
                            style={styles.input}
                            value={guest}
                            onChangeText={(val) => setGuest(val)}
                        />
                    </View>
                    <View style={styles.rightBox}>
                        <Text style={styles.inputText}>Date</Text>
                        <TextInput
                            style={styles.input}
                            value={date}
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
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Booking accepted</Text>
                            <Pressable
                                style={styles.button}
                                onPress={() => [
                                    setModalVisible(!modalVisible), 
                                    navigation.reset({ index: 0, routes: [{ name: 'HomeTab' }] })
                                ]}
                                
                                >
                                <Text style={styles.buttonText}>OK</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity style={styles.button}
                    onPress={() => [
                        saveReservation(),
                        setModalVisible(true)
                    ]}
                >
                    <Text style={styles.buttonText}>RESERVE</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    page: {
        marginHorizontal: 20,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 20,
    },
    imageRestaurant: {
        resizeMode: 'cover',
        width: "100%",
        height: 200,
    },
    restName: {
        fontWeight: 'bold',
        fontSize: 18,
        flexDirection: 'column',
        paddingTop: 10
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
        marginHorizontal: 20,
        marginVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
    })
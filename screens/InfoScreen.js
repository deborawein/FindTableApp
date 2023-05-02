import { View, Text, TouchableOpacity, StyleSheet, Alert, Modal, Pressable, ScrollView, SafeAreaView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useContext, useState } from 'react'
import { Image } from 'expo-image';
//components
import { EditButton } from '../components/EditButton';
//context
import { AuthContext } from "../context/AuthContext";
import { DBContext } from '../context/DBContext';
import { ReservationContext } from '../context/ReservationContext';
//incons
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
//firebase
import { deleteDoc, doc } from 'firebase/firestore'

export function InfoScreen(props) {
    const authStatus = useContext(AuthContext)
    const DB = useContext(DBContext)
    const reserveData = useContext(ReservationContext)


    const routeInfo = useRoute();
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);

    const { id, name, guest, date, time, firstname, lastname, phone, image } = routeInfo.params

    const ListClickHandler = (data) => {
        navigation.navigate("Edit", data)
    }

    const cancelReservation = async () => {
        const path = `users/${authStatus.uid}/reservations`
        await deleteDoc(doc(DB, path, id))
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.page}>
                <Image source={image} style={styles.imageRestaurant} />
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
                <EditButton
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
                            <Text style={styles.modalText}>Would you like to cancel the booking?</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Pressable
                                    style={[styles.button, { backgroundColor: '#00043C' }]}
                                    onPress={() => [
                                        setModalVisible(!modalVisible)
                                    ]}

                                >
                                    <Text style={styles.buttonText}>NO</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.button}
                                    onPress={() => [
                                        setModalVisible(!modalVisible),
                                        cancelReservation(),
                                        navigation.reset({ index: 0, routes: [{ name: 'BookingsStack' }] })
                                    ]}
                                >
                                    <Text style={styles.buttonText}>YES</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity style={styles.button} onPress={() => [
                    setModalVisible(true)
                ]}>
                    <Text style={styles.buttonText} >CANCEL BOOKING</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    page: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titleBox: {
        marginHorizontal: 10,
        padding: 20,
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    restaurant: {
        fontSize: 16,
        textAlign: 'center',
    },
    imageRestaurant: {
        contentFit: 'cover',
        width: "100%",
        height: 200,
    },
    box: {
        paddingTop: 10,
        marginHorizontal: 10,

    },
    bookingText: {
        fontSize: 14,
        paddingVertical: 5,
        fontWeight: 'bold'
    },
    contactTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    contactText: {
        fontSize: 14,

    },
    buttonBox: {
        padding: 10,
    },
    button: {
        backgroundColor: '#FF707E',
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
        marginHorizontal: 20
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
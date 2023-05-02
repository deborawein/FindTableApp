import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, Alert, Pressable, SafeAreaView } from 'react-native'
import { useContext, useState } from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from 'expo-image';

//context
import { AuthContext } from "../context/AuthContext";
import { DBContext } from '../context/DBContext';
//firebase
import { doc, updateDoc } from 'firebase/firestore'

export function UpdateScreen(props) {
    const navigation = useNavigation()
    const authStatus = useContext(AuthContext)
    const DB = useContext(DBContext)
    const routeUpdate = useRoute();
    const [modalVisible, setModalVisible] = useState(false);

    const { id, name, guest, date, time, firstname, lastname, phone, image } = routeUpdate.params

    const [guestUp, setGuestUp] = useState(guest)
    const [dateUp, setDateUp] = useState(date)
    const [timeUp, setTimeUp] = useState(time)

    const [firstnameUp, setFirstnameUp] = useState(firstname)
    const [lastnameUp, setLastnameUp] = useState(lastname)
    const [phoneUp, setPhoneUp] = useState(phone)

    const updateReservation = async () => {
        const path = `users/${authStatus.uid}/reservations`
        await updateDoc(doc(DB, path, id), { guest: guestUp, date: dateUp, time: timeUp, firstname: firstnameUp, lastname: lastnameUp, phone: phoneUp })
        navigation.goBack()
    }

    return (

        <SafeAreaView style={styles.page}>
            <ScrollView>
            <Image source={image} style={styles.imageRestaurant} />
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
                <View style={styles.rowLong}>
                <Text style={styles.inputText}>Booking Time</Text>
                <TextInput
                    style={styles.input}
                    value={timeUp}
                    onChangeText={(val) => setTimeUp(val)}
                />
                </View>
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
                <View style={styles.rowLong}>
                <Text style={styles.inputText}>Phone number</Text>
                <TextInput
                    style={styles.input}
                    value={phoneUp}
                    onChangeText={(val) => setPhoneUp(val)}
                />
                </View>
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
                            <Text style={styles.modalText}>Would you like to update the booking?</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Pressable
                                    style={[styles.button, { backgroundColor: '#00043C' }]}
                                    onPress={() => [
                                        setModalVisible(!modalVisible),
                                        navigation.goBack()
                                    ]}
                                >
                                    <Text style={styles.buttonText}>NO</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.button}
                                    onPress={() => [
                                        setModalVisible(!modalVisible),
                                        updateReservation(),
                                        navigation.reset({ index: 0, routes: [{ name: 'BookingsStack' }] })
                                    ]}
                                >
                                    <Text style={styles.buttonText}>YES</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.buttonText}>EDIT</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    page: {
        marginHorizontal: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        marginHorizontal: 10,

    },
    rowLong: {
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 10,
        marginHorizontal: 10,
    },
    imageRestaurant: {
        contentFit: 'cover',
        width: "100%",
        height: 200,
    },
    restName: {
        fontWeight: 'bold',
        fontSize: 24,
        flexDirection: 'column',
        marginHorizontal: 10,
        paddingVertical: 10,
    },
    contact: {
        fontWeight: 'bold',
        fontSize: 18,
        flexDirection: 'column',
        paddingTop: 30,
        marginHorizontal: 10,

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
        fontSize: 14,
        flexDirection: 'column',
        display: 'flex',
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderWidth: 1,
        borderColor: '#BFBFC1',
        borderRadius: 5,
        fontSize: 14,
        flex: 1,
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
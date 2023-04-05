import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
//Components
import { Header } from '../components/Header'
import { Search } from '../components/Search';

// //Firebase
// import { firebaseConfig } from '../config/Config';
// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   onAuthStateChanged
// } from "firebase/auth";
// import {
//   getFirestore,
//   doc,
//   setDoc,
//   addDoc,
//   collection
// } from 'firebase/firestore';

// const FBapp = initializeApp(firebaseConfig)
// const FBauth = getAuth(FBapp)
// const FBdb = getFirestore(FBapp)


export function FindTableScreen(props) {
    // const [tableData, setNoteData] = useState([])

    const navigation = useNavigation();

    // onAuthStateChanged(FBauth, (user) => {
    //     if (user) {
    //       setAuth(user)
    //       console.log(user.uid)
    //     }
    //     else {
    //       setAuth(null)
    //     }
    //   })

    // useEffect (() => {
    //     if(tableData.length === 0 && auth){
    //         GetData()
    //     }
    // }
    // )

    // const GetData = () => {
    //     const userId = auth.uid 
    //     const path = `users/${userId}/table`
    //     const dataQuery = query(collection(FBdb, path ))
    //     const unsubscribe = onSnapshot(dataQuery, (responseData) =>{
    //         let table = []
    //         responseData.forEach( (table) => {
    //             table.push( table.data() )
    //         })
    //             console.log(table)
    //     })
    // }


    return (
        <View>
            <Header />
            <Search />
            <TouchableOpacity style={styles.button} onPress={() => props.addData()}>
                <Text style={styles.buttonText}>Add some data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => props.signOutHandler()}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFA3AC',
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
})
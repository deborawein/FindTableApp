import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect } from 'react'
//React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screen
import { FindTableScreen } from '../screens/FindTableScreen';
import { BookingsScreen } from '../screens/BookingsScreen';
//Firebase
import { firebaseConfig } from '../config/Config';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  query,
  onSnapshot
} from 'firebase/firestore';
import { async } from "@firebase/util";

const Tab = createBottomTabNavigator();

const FBapp = initializeApp(firebaseConfig)
const FBauth = getAuth(FBapp)
const FBdb = getFirestore(FBapp)

export function Tabs(props) {
  const [auth, setAuth] = useState()
  const [restaurantData, setRestaurantData] = useState([])


  const navigation = useNavigation()

  //If not autheticated add arrow to header
  useEffect(() => {
    if (!props.authStatus) {
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] })

    }
  }, [props.authStatus])

  //Sign out
  // const SignOut = () => {
  //   signOut(FBauth)
  //     .then(() => { })
  //     .catch((error) => console.log(error))
  // }

  onAuthStateChanged(FBauth, (user) => {
    if (user) {
      setAuth(user)
      // console.log(user.uid)
    }
    else {
      setAuth(null)
    }
  })

  //Add table to Firebase
  const AddData = async () => {
    const userId = auth.uid
    const path = `users/${userId}/table`
    const data = {
      table: '1'
    }
    const ref = await addDoc(collection(FBdb, path), data)
  }

  useEffect(() => {
    if (restaurantData.length === 0 && auth) {
      GetRestaurantData()
    }
  }
  )

  const GetRestaurantData = () => {
    // const userId = auth.uid
    const path = `restaurants`
    const dataQuery = query(collection(FBdb, path))
    const unsubscribe = onSnapshot(dataQuery, (querySnapshot) => {
      let restaurants = []
      querySnapshot.forEach((doc) => {
        // console.log(doc.data().name)
        let item = doc.data()
        item.id = doc.id
        restaurants.push(item)
      })
      console.log(restaurants)
      setRestaurantData (restaurants)
    })
  }

  return (

    <Tab.Navigator id='RootNavigator'>
      <Tab.Screen
        name='Find Table'
        options={{ headerShown: false          
         }}
      >
        {(props) => <FindTableScreen {...props} addData={AddData} />}
      </Tab.Screen>
      <Tab.Screen 
      name='Bookings' options={{ headerShown: false }} >
      {(props) => <BookingsScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
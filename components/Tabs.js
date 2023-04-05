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
  signOut
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection
} from 'firebase/firestore';
import { async } from "@firebase/util";

const Tab = createBottomTabNavigator();

const FBapp = initializeApp(firebaseConfig)
const FBauth = getAuth(FBapp)
const FBdb = getFirestore(FBapp)

export function Tabs(props) {

  const navigation = useNavigation()

  useEffect(() => {
    if (!props.authStatus) {
      navigation.navigate('Login')
    }
  }, [props.authStatus])

  const SignOut = () => {
    signOut(FBauth)
      .then(() => {
        //now the user is signed out
      })
      .catch((error) => console.log(error))
  }

  const addData = async () => { 
    const path = 'restaurants'
    const date = {
      name: 'restaurant name', 
      suburb: 'somewhere', 
      state: 'VIC', 
      type: 'food type'
    }
    const ref = await addDoc( collection(FBdb, path), date)
  }

  return (

    <Tab.Navigator id='RootNavigator'>
      <Tab.Screen
        name='Find Table'
        options={{ headerShown: false }}
      >
        {(props) => <FindTableScreen {...props} signOutHandler={SignOut} addData={addData}/>}
      </Tab.Screen>
      <Tab.Screen name='Bookings' options={{ headerShown: false }} component={BookingsScreen} />
    </Tab.Navigator>
  )
}
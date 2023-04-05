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

const Tab = createBottomTabNavigator();

const FBapp = initializeApp(firebaseConfig)
const FBauth = getAuth(FBapp)

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

  return (

    <Tab.Navigator id='RootNavigator'>
      <Tab.Screen
        name='Find Table'
        options={{ headerShown: false }}
      >
        {(props) => <FindTableScreen {...props} signOutHandler={SignOut} />}
      </Tab.Screen>
      <Tab.Screen name='Bookings' options={{ headerShown: false }} component={BookingsScreen} />
    </Tab.Navigator>
  )
}
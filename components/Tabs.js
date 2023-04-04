import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FindTableScreen } from '../screens/FindTableScreen';
import { BookingsScreen } from '../screens/BookingsScreen';

const Tab = createBottomTabNavigator();


export function Tabs(props) {

  // const navigation = useNavigation()

  // useEffect(() => {
  //   if (!props.authStatus) {
  //     navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
  //   }
  // }, [props.authStatus])


  return (

    <Tab.Navigator id="RootNavigator">
    <Tab.Screen name="Find Table" component={FindTableScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Bookings" component={BookingsScreen} />
  </Tab.Navigator>
  )
}
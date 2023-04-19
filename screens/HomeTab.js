import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect, useContext } from 'react'
//React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screen
import { HomeStack } from "./HomeStack";
import { BookingsScreen } from "./BookingsScreen"
//context
import { AuthContext } from "../context/AuthContext";

const Tab = createBottomTabNavigator();

export function HomeTab(props) {
  const navigation = useNavigation()
  const authStatus = useContext(AuthContext)

  useEffect(() => {
    if (!authStatus) {
      navigation.reset({ index: 0, routes: [{ name: "Login" }] })
    }
  }, [authStatus])

  return (

    <Tab.Navigator id='TabNavigator'>
      <Tab.Screen
        name='HomeStack'
        options={{
          headerShown: false
        }}
      >
        {(props) => <HomeStack {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name='Bookings'
        options={{
          headerShown: false
        }}
      >
        {(props) => <BookingsScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
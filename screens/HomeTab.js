import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect } from 'react'
//React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screen
import { HomeStack } from "./HomeStack";
import { BookingsScreen } from "./BookingsScreen"

const Tab = createBottomTabNavigator();


export function HomeTab(props) {
  const navigation = useNavigation()

  useEffect(() => {
    if (!props.authStatus) {
      navigation.reset({ index: 0, routes: [{ name: "Login" }] })
    }
  }, [props.authStatus])

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
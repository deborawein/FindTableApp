import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useEffect, useState, useContext } from 'react'
//React Navigation
import { useNavigation } from "@react-navigation/native";
//context
import { AuthContext } from "../context/AuthContext";
//React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screen
import { HomeStack } from "./HomeStack";
import { BookingsScreen } from "./BookingsScreen"

const Tab = createBottomTabNavigator();


export function HomeTab(props) {
  const navigation = useNavigation()
  const authStatus = useContext(AuthContext)


  useEffect(() => {
    if (!authStatus) {
      navigation.reset({ index: 0, routes: [{ name: "Login" }] })
    }
    console.log(authStatus)
  }, [authStatus])

  return (

    <Tab.Navigator id='TabNavigator'>
      <Tab.Screen name='HomeStack' options={{ headerShown: false }} >
        {(props) =>
          // <AuthContext.Provider value={authStatus}>
            <HomeStack {...props} />
          // </AuthContext.Provider>
        }
      </Tab.Screen>
      <Tab.Screen name='Bookings' options={{ headerShown: false }} >
        {(props) => <BookingsScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
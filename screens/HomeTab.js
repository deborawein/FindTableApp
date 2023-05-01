import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect, useContext } from 'react'
//React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screen
import { HomeStack } from "./HomeStack";
import { BookingsStack } from "./BookingsStack";
//context
import { AuthContext } from "../context/AuthContext";
//icon
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

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

    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#FFA3AC",
      tabBarInactiveTintColor: "#00043C",
      tabBarStyle: {
        backgroundColor: '#00043C',
        height: 60
      },
      tabBarLabelStyle: {
        fontSize: 12,
        margin: 5,
      },
    }}>
      <Tab.Screen
        name='Find Table'
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="restaurant" size={24} color="#FF707E" />
          )
        }}
      >
        {(props) => <HomeStack {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name='Bookings'
        options={{
          headerShown: false,
          tabBarLabel: 'Bookings',
          tabBarIcon: () => (<FontAwesome5 name="calendar-check" size={24} color="#FF707E" />)
        }}>
        {(props) => <BookingsStack {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
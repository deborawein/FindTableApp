import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect, useContext } from 'react'
//context
import { AuthContext } from "../context/AuthContext";
//screens
import { BookingsScreen } from "./BookingsScreen"
import { InfoScreen } from "./InfoScreen"
import { UpdateScreen } from './UpdateScreen';


const Stack = createNativeStackNavigator();

export function BookingsStack(props) {

  const navigation = useNavigation()
  const authStatus = useContext(AuthContext)

  return (
    <Stack.Navigator>
      <Stack.Screen name='Bookings' options={{ headerShown: false }}>
        {(props) => <BookingsScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name='Booking Detail' options={{
        headerShown: true,
        headerStyle: {backgroundColor: '#00043C'},
        headerTintColor: '#FFA3AC',
      }} >
        {(props) => <InfoScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name='Edit' options={{
        headerShown: true,
        headerStyle: {backgroundColor: '#00043C'},
        headerTintColor: '#FFA3AC',
      }} >
        {(props) => <UpdateScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
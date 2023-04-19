import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect, useContext } from 'react'
//context
import { AuthContext } from "../context/AuthContext";
//screens
import { BookingsScreen} from "./BookingsScreen"

const Stack = createNativeStackNavigator();

export function BookingsStack(props) {

  const navigation = useNavigation()
  const authStatus = useContext(AuthContext)

  return (
    <Stack.Navigator>
      <Stack.Screen name='Bookings' options={{ headerShown: true }}>
        {(props) => <BookingsScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
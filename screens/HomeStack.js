import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect, useContext } from 'react'
//context
import { AuthContext } from "../context/AuthContext";
//screens
import { HomeScreen } from './HomeScreen';
import { ReserveScreen } from './ReserveScreen';

const Stack = createNativeStackNavigator();

export function HomeStack(props) {

  const navigation = useNavigation()
  const authStatus = useContext(AuthContext)

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        options={{
          headerShown: true
        }}
      >
        {(props) => <HomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name='Reserve'
        options={{
          headerShown: true
        }}
      >
        {(props) => <ReserveScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
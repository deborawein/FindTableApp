import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export function BookingsScreen(props) {
  const navigation = useNavigation()
  const authStatus = useContext(AuthContext)

  useEffect(() => {
    if (!authStatus) {
      navigation.reset({ index: 0, routes: [{ name: "Login" }] })
    }
    console.log(authStatus)
  }, [authStatus])


  return(
    <View>
      <Text>Booking Screen</Text>
    </View>
  )
}
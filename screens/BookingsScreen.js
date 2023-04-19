import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
//context
import { AuthContext } from '../context/AuthContext';


export function BookingsScreen(props) {
  const navigation = useNavigation()
  const authStatus = useContext(AuthContext)


  return(
    <View>
      <Text>Booking Screen</Text>
    </View>
  )
}
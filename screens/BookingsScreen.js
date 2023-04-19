import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
//context
import { AuthContext } from '../context/AuthContext';
import { ReservationContext } from '../context/ReservationContext';
//incons
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const imageRestaurant = require('../assets/restaurant.png');

export function BookingsScreen(props) {
  const navigation = useNavigation()
  const authStatus = useContext(AuthContext)
  const reserveData = useContext(ReservationContext)

  const ListClickHandler = (data) => {
    navigation.navigate("Info", data)
  }

  const ListItem = (props) => {
    return (
      <View>
        <TouchableOpacity
          onPress={
            () => ListClickHandler(
              {
                id: props.id, 
                name: props.name, 
                guest: props.guest, 
                date: props.date,
                time: props.time, 
                firstname: props.firstname, 
                lastname: props.lastname, 
                phone: props.phone
              }
            )
          }
        >
          <View style={styles.container}>
            <Image source={imageRestaurant} style={styles.imageRestaurant} />
            <Text style={styles.itemName}>{props.name}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Text style={styles.itemLeft}>
                <FontAwesome5 name="calendar-check" size={20} color="#FF707E" />  {props.date} - {props.time}
              </Text>
            </View>
            <View style={styles.rowRight}>
              <Text style={styles.itemRight}>
                <FontAwesome name="group" size={20} color="#FF707E" />  {props.guest} people
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const ListItemSeparator = (props) => {
    return (
      <View style={styles.separatorItem}></View>
    )
  }

  return (

    <View>
      <FlatList data={reserveData}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            date={item.date}
            guest={item.guest}
            time={item.time}
            firstname={item.firstname}
            lastname={item.lastname}
            phone={item.phone}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  row: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginVertical: 10,

  },
  button: {
    backgroundColor: '#FF707E',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  imageRestaurant: {
    resizeMode: 'contain',
    width: '100%',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  separatorItem: {
    backgroundColor: '#CCCCCC',
    height: 1,
  },
  rowRight: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  itemRight: {
    fontSize: 11,
    textAlign: 'right'
  },
  rowLeft: {
    fontSize: 11,
    flex: 1,
    justifyContent: 'flex-start',
    textAlign: 'left'
  },

  itemLeft: {
    fontSize: 11,
    textAlign: 'left'
  },


})
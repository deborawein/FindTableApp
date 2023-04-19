import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
//Components
import { Header } from '../components/Header'
import { Search } from '../components/Search';
//context
import { AuthContext } from '../context/AuthContext';
import { RestaurantContext } from '../context/RestaurantContext';

const imageRestaurant = require('../assets/restaurant.png');

export function HomeScreen(props) {
    const navigation = useNavigation()
    const authStatus = useContext(AuthContext)
    const restData = useContext(RestaurantContext)

    const ListClickHandler = (data) => {
        navigation.navigate("Reserve", data)
    }

    const ListItem = (props) => {
        return (
            <View style={styles.itemList}>
                <TouchableOpacity
                    onPress={
                        () => ListClickHandler(
                            {
                                id: props.id, name: props.name, type: props.type, suburb: props.suburb, state: props.state
                            }
                        )
                    }>
                    <Image source={imageRestaurant} style={styles.imageRestaurant} />
                    <Text style={styles.itemName}>{props.name}</Text>
                    <Text style={styles.itemDescription}>{props.type} • {props.suburb}, {props.state}</Text>
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
            <Header />
            <Search />
            <FlatList data={restData}
                renderItem={({ item }) => (
                    <ListItem name={item.name} suburb={item.suburb} state={item.state} type={item.type} />
                )}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ListItemSeparator}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFA3AC',
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
    itemList: {
        padding: 20,
    },
    imageRestaurant: {
        resizeMode: 'contain',
        width: '100%',
      },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    itemDescription: {
        fontSize: 11,
    },
    separatorItem: {
        backgroundColor: '#CCCCCC',
        height: 1,
    }
})
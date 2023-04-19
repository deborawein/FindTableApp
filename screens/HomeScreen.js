import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
//context
import { AuthContext } from '../context/AuthContext';
//components
import { Header } from '../components/Header'
import { Search } from '../components/Search';

const imageRestaurant = require('../assets/restaurant.png');

export function HomeScreen(props) {
    const navigation = useNavigation()
    const authStatus = useContext(AuthContext)

    useEffect(() => {
        if (!authStatus) {
          navigation.reset({ index: 0, routes: [{ name: "Login" }] })
        }
        console.log(authStatus)
      }, [authStatus])

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
            {/* <TouchableOpacity style={styles.button} onPress={() => props.addData()}>
                <Text style={styles.buttonText}>Add some data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => props.signOutHandler()}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity> */}
            <FlatList data={props.restaurantData}
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
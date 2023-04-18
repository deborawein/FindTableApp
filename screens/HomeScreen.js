import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

//Components
import { Header } from '../components/Header'
import { Search } from '../components/Search';

export function HomeScreen(props) {
    const navigation = useNavigation()

    const ListClickHandler = (data) => {
        navigation.navigate("Reservation", data)
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
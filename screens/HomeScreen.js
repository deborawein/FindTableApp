import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
//components
import { Header } from '../components/Header'
import { Search } from '../components/Search';
import { RestaurantListItem } from '../components/RestaurantListItem';
import { ListItemSeparator } from "../components/ListItemSeparator"
//context
import { AuthContext } from '../context/AuthContext';
import { RestaurantContext } from '../context/RestaurantContext';

export function HomeScreen(props) {

    const navigation = useNavigation()
    const authStatus = useContext(AuthContext)
    const restData = useContext(RestaurantContext)

    const ListClickHandler = (data) => {
        console.log(data)
        navigation.navigate("Reservation", data)
    }

    return (

        <View style={{flex: 1}}>
            <Header />
            <Search />
            <FlatList data={restData}
                renderItem={({ item }) => (
                    <RestaurantListItem 
                    name={item.name} 
                    suburb={item.suburb}
                    state={item.state} 
                    type={item.type}
                    image={item.image}
                    handler={ListClickHandler}
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

})
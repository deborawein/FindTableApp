import { StyleSheet, View, FlatList, TextInput, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Fragment, useContext, useState } from 'react';
//components
import { Header } from '../components/Header'
import { RestaurantListItem } from '../components/RestaurantListItem';
import { ListItemSeparator } from "../components/ListItemSeparator"
//context
import { AuthContext } from '../context/AuthContext';
import { RestaurantContext } from '../context/RestaurantContext';
//icon
import { FontAwesome } from '@expo/vector-icons';


export function HomeScreen(props) {

    const navigation = useNavigation()
    const authStatus = useContext(AuthContext)
    const restData = useContext(RestaurantContext)

    const [search, setSearch] = useState('');

    const ListClickHandler = (data) => {
        navigation.navigate("Reservation", data)
    }

    const filterItems = (restData, filter) => {
        return restData.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    }

    const renderItem = ({ item }) => {
        return <RestaurantListItem
            image={item.image}
            name={item.name}
            type={item.type}
            suburb={item.suburb}
            state={item.state}
            handler={ListClickHandler} />
    }

    return (
        <Fragment>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ flex: 0, backgroundColor: '#00043C' }}></SafeAreaView>
            <SafeAreaView style={{ flex: 1 }}>
                <Header />
                <FlatList data={filterItems(restData, search)}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={ListItemSeparator}
                    ListHeaderComponent={
                        <View style={styles.containerSearch}>
                            <View style={styles.searchSection}>
                                <FontAwesome
                                    style={styles.searchIcon}
                                    name="search"
                                    size={20}
                                    color="#FF707E"
                                />
                                <TextInput style={styles.input}
                                    placeholder='Search restaurant...'
                                    onChangeText={query => setSearch(query)}
                                    value={search}
                                />
                            </View>
                        </View>
                    }
                />
            </SafeAreaView>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFA3AC',
    },
    containerSearch: {
        backgroundColor: '#FFA3AC',
        paddingVertical: 15,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 20,
    },
    searchIcon: {
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 15,
        borderWidth: 1,
        borderColor: '#BFBFC1',
        borderRadius: 5,
        fontSize: 14,
        marginHorizontal: 5,
    },
})
import { StyleSheet, View, FlatList, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
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
        <ScrollView>
            <SafeAreaView>
                <View style={{ flex: 1 }}>
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
                </View>
            </SafeAreaView>
        </ScrollView>
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
    containerSearch: {
        backgroundColor: '#FFA3AC',
        paddingVertical: 10,
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
        paddingHorizontal: 20,
    },
    input: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#BFBFC1',
        borderRadius: 5,
        fontSize: 12,
        marginHorizontal: 5,
    },
})
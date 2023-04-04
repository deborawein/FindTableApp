import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header'
import { Search } from '../components/Search';

export function FindTableScreen(props) {

    const navigation = useNavigation();
  
    return (
        <View>
            <Header />
            <Search />
            </View>
    )
  }
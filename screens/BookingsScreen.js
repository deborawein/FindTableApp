import { View, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
//context
import { AuthContext } from '../context/AuthContext';
import { ReservationContext } from '../context/ReservationContext';
//components
import { ListItemSeparator } from '../components/ListItemSeparator';
import { BookingListItem } from '../components/BookingListItem';
import { Header } from '../components/Header';

export function BookingsScreen(props) {
  const navigation = useNavigation()
  const authStatus = useContext(AuthContext)
  const reserveData = useContext(ReservationContext)

  const ListClickHandler = (data) => {
    navigation.navigate("Booking Detail", data)
  }
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ flex: 1 }}>
          <Header />
          <FlatList style={{ backgroundColor: "#FFE7E9" }} data={reserveData}
            renderItem={({ item }) => (
              <BookingListItem
                id={item.id}
                name={item.name}
                date={item.date}
                guest={item.guest}
                time={item.time}
                firstname={item.firstname}
                lastname={item.lastname}
                phone={item.phone}
                image={item.image}
                handler={ListClickHandler}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ListItemSeparator}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}




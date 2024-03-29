import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, Fragment } from 'react';
//context
import { ReservationContext } from '../context/ReservationContext';
//components
import { ListItemSeparator } from '../components/ListItemSeparator';
import { BookingListItem } from '../components/BookingListItem';
import { Header } from '../components/Header';

export function BookingsScreen(props) {
  const navigation = useNavigation()
  const reserveData = useContext(ReservationContext)

  const ListClickHandler = (data) => {
    navigation.navigate("Booking Detail", data)
  }
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#00043C' }}></SafeAreaView>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Header />
        <FlatList data={reserveData}
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
      </SafeAreaView>
    </Fragment>
  )
}




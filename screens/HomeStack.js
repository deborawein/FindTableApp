import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect } from 'react'


import { HomeScreen } from './HomeScreen';
import { ReservationScreen } from './ReservationScreen';

//Firebase
import { firebaseConfig } from '../config/Config';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  query,
  where,
  onSnapshot
} from 'firebase/firestore'

const Stack = createNativeStackNavigator();

const FBapp = initializeApp(firebaseConfig)
const FBdb = getFirestore(FBapp)


export function HomeStack(props) {

  const navigation = useNavigation()

  const [restaurantData, setRestaurantData] = useState([])


  useEffect(() => {
    if (restaurantData.length === 0) {
      GetRestaurantData()
    }
  }
  )

  const GetRestaurantData = () => {
    const path = `restaurants`
    const dataQuery = query(collection(FBdb, path))
    const unsubscribe = onSnapshot(dataQuery, (querySnapshot) => {
      let restaurants = []
      querySnapshot.forEach((doc) => {
        // console.log(doc.data().name)
        let item = doc.data()
        item.id = doc.id
        restaurants.push(item)
      })
      console.log(restaurants)
      setRestaurantData(restaurants)
    })
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        options={{
          headerShown: true
        }}
      >
        {(props) => <HomeScreen {...props} restaurantData={restaurantData} />}
      </Stack.Screen>
      <Stack.Screen
        name='Reservation'
        options={{
          headerShown: true
        }}
      >
        {(props) => <ReservationScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
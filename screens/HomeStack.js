import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect, useContext } from 'react'
//context
import { AuthContext } from '../context/AuthContext';
//screens
import { HomeScreen } from './HomeScreen';
import { ReserveScreen } from './ReserveScreen';

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
  const authStatus = useContext(AuthContext)

  const [restaurantData, setRestaurantData] = useState([])

  useEffect(() => {
    if (!authStatus) {
      navigation.reset({ index: 0, routes: [{ name: "Login" }] })
    }
    console.log(authStatus)
  }, [authStatus])

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
          headerShown: false
        }}
      >
        {(props) => <HomeScreen {...props} restaurantData={restaurantData} />}
      </Stack.Screen>
      <Stack.Screen
        name='Reserve'
        options={{
          headerShown: true
        }}
      >
        {(props) => <ReserveScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
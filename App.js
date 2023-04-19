import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
//context
import { AuthContext } from './context/AuthContext';
import { RestaurantContext } from './context/RestaurantContext';
import { DBContext } from './context/DBContext';
import { FBAuthContext } from './context/FBAuthContext';
//screens
import { LoginScreen } from './screens/LoginScreen';
import { SigninScreen } from './screens/SigninScreen';
import { SignupScreen } from './screens/SignupScreen';
import { HomeTab } from './screens/HomeTab';
// firebase modules
import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth"

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
const FBauth = getAuth(FBapp)
const FBdb = getFirestore(FBapp)

export default function App() {
  const [auth, setAuth] = useState()
  const [restaurantData, setRestaurantData] = useState([])

  onAuthStateChanged(FBauth, (user) => {
    if (user) {
      setAuth(user)
    }
    else {
      setAuth(null)
    }
  })

  useEffect(() => {
    if (restaurantData.length === 0 && auth) {
      GetRestaurantData()
    }
  })

  const SignUp = (email, password) => {
    createUserWithEmailAndPassword(FBauth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((error) => console.log(error))
  }

  const SignIn = (email, password) => {
    signInWithEmailAndPassword(FBauth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((error) => console.log(error))
  }

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' options={{ headerShown: false }}>
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name='Sign Up' options={{ headerShown: false }}
        >
          {(props) =>
            <AuthContext.Provider value={auth}>
              <SignupScreen {...props} handler={SignUp} />
            </AuthContext.Provider>
          }
        </Stack.Screen>
        <Stack.Screen name='Sign In' options={{ headerShown: false }}>
          {(props) =>
            <AuthContext.Provider value={auth}>
              <SigninScreen {...props} handler={SignIn} />
            </AuthContext.Provider>
          }
        </Stack.Screen>
        <Stack.Screen name='HomeTab' options={{ headerShown: false }}>
          {(props) =>
            <FBAuthContext.Provider value={FBauth} >
              <DBContext.Provider value={FBdb}>
                <AuthContext.Provider value={auth}>
                  <RestaurantContext.Provider value={restaurantData}>
                    <HomeTab {...props} />
                  </RestaurantContext.Provider>
                </AuthContext.Provider>
              </DBContext.Provider>
            </FBAuthContext.Provider>
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
//context
import { AuthContext } from './context/AuthContext';
//screens
import { LoginScreen } from './screens/LoginScreen';
import { SigninScreen } from './screens/SigninScreen';
import { SignupScreen } from './screens/SignupScreen';
import { HomeTab } from './screens/HomeTab';
//Firebase
import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth"

const FBapp = initializeApp(firebaseConfig)
const FBauth = getAuth(FBapp)

const Stack = createNativeStackNavigator()

export default function App() {
  const [auth, setAuth] = useState()

  onAuthStateChanged(FBauth, (user) => {
    if (user) {
      setAuth(user)
    }
    else {
      setAuth(null)
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

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' options={{ headerShown: false }} >
          {(props) => 
          <LoginScreen {...props} />
          }
        </Stack.Screen>

      <Stack.Screen name='Sign Up' options={{ headerShown: false }} >
          {(props) => 
          <AuthContext.Provider value={auth}>
          <SignupScreen {...props} handler={SignUp} />
          </AuthContext.Provider>
          }
        </Stack.Screen>

        <Stack.Screen name='Sign In' options={{ headerShown: false }} >
          {(props) => 
          <AuthContext.Provider value={auth}>
          <SigninScreen {...props} handler={SignIn} />
          </AuthContext.Provider>
          }
        </Stack.Screen>

        <Stack.Screen name='HomeTab' options={{ headerShown: false }} >
          {(props) => 
          <AuthContext.Provider value={auth}>
          <HomeTab {...props} handler={'HomeTab'} />
          // </AuthContext.Provider>
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
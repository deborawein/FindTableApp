import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';


//screens
import { LoginScreen } from './screens/LoginScreen';
import { SigninScreen } from './screens/SigninScreen';
import { SignupScreen } from './screens/SignupScreen';
import { Tabs } from './components/Tabs';

//Firebase
import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth"


const Stack = createNativeStackNavigator();

const FBapp = initializeApp(firebaseConfig)
const FBauth = getAuth(FBapp)



export default function App() {
  const [auth,setAuth] = useState()
  // const [ errorMsg, setErrorMsg ] = useState()

  onAuthStateChanged( FBauth, (user) => {
    if( user ) {
      setAuth( user )
      console.log( user.uid )
    }
    else {
      setAuth( null )
    }
  })

  const SignUp = (email, password) => {
    createUserWithEmailAndPassword(FBauth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((error) => console.log(error))
  }

  // const SignIn = ( email, password ) => {
  //   signInWithEmailAndPassword( FBauth, email, password )
  //   .then( (userCredential) => console.log(userCredential) )
  //   .catch( (error) => console.log(error) )
  // }

  // const SignOut = () => {
  //   signOut(FBauth)
  //   .then( () => {
  //     //now the user is signed out
  //   })
  //   .catch((err) => console.log(error) )
  // }


  // const GetData = () => {
  //   const userId = auth.uid
  //   const path = `users/${userId}/notes`
  //   const dataQuery = query( collection( FBdb, path ) )
  //   const unsubscribe = onSnapshot( dataQuery, ( responseData ) => {
  //     let notes = []
  //     responseData.forEach( (note) => {
  //       notes.push( note.data() )
  //     })
  //     console.log( notes )
  //   })
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name='Sign Up' options={{ headerShown: false }}>
          { (props) => <SignupScreen {...props} handler={SignUp} authStatus={auth} /> }
        </Stack.Screen>
        <Stack.Screen name='Sign In' options={{ headerShown: false }} component={SigninScreen} />
        <Stack.Screen name='Tabs' options={{ headerShown: false }} component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
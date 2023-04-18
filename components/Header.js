import { StyleSheet, View, Image } from 'react-native';
import { SignOutButton } from './SignOutButton';
//Firebase
import { firebaseConfig } from '../config/Config';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut
} from "firebase/auth";

const FBapp = initializeApp(firebaseConfig)
const FBauth = getAuth(FBapp)

const logo = require('../assets/logo.png')

const SignOut = () => {
  signOut(FBauth)
    .then(() => { })
    .catch((error) => console.log(error))
}

export function Header(props) {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logoImage} />
      <SignOutButton style={styles.signOutButton} signOutHandler={SignOut}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00043C',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: 10,

  },
  logoImage: {
    resizeMode: 'contain',
    height: '60%',
    flex: 2,
    alignSelf: 'center',

  },
  signOutButton: {
    flex: 1,
 
    }
})
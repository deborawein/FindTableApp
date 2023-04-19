import { StyleSheet, View, Image } from 'react-native';
import { SignOutButton } from './SignOutButton';

const logo = require('../assets/logo.png')

export function Header(props) {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logoImage} />
      <SignOutButton style={styles.signOutButton}/>
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
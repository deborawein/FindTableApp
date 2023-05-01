import { StyleSheet, View, Image } from 'react-native';
import { SignOutButton } from './SignOutButton';

const logo = "https://firebasestorage.googleapis.com/v0/b/findtableapp-1feb9.appspot.com/o/assets%2Flogo.png?alt=media&token=4f9f121e-b3f3-4956-b791-cce1bb5cf753";
  

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
    height: 65,
    //display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: 10,

  },
  logoImage: {
    resizeMode: 'contain',
    height: '60%',
    width: '90%',
    //flex: 2,
    alignSelf: 'center',

  },
  signOutButton: {
    //flex: 1,
    width: '10%'
 
    }
})
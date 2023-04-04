import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
const logo = require('../assets/logo.png')

export function Header(props) {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logoImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00043C',
    height: 50,
    justifyContent: 'center',

  },
  logoImage: {
    resizeMode: 'contain',
    height: '60%',
    width: '100%',
    alignSelf: 'center'

  }
})
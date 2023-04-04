
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const imageWelcome = require('../assets/welcome.png');
const logo = require('../assets/logo.png');



export function LoginScreen(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <View style={styles.imageContainer}>
        <Image source={imageWelcome} style={styles.imageWelcome} />
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Sign In')}
        >
          <Text style={styles.buttonText}>
            LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Sign Up')}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.imageLogo} />
      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  imageContainer: {
    flex: 2,
    padding: 10,
  },
  mainContainer: {
    flex: 2,
    backgroundColor: '#00043C',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  logoContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#00043C',
    justifyContent: 'center'
  },

  imageWelcome: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    color: '#FFA3AC',
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#FF707E',
    padding: 10,
    marginHorizontal: 80,
    marginVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  imageLogo: {
    resizeMode: 'contain',
    height: 50,
    width: '100%',
    alignSelf: 'center'
  },
});
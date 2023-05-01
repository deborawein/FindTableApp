
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function LoginScreen(props) {
  const imageWelcome = "https://firebasestorage.googleapis.com/v0/b/findtableapp-1feb9.appspot.com/o/assets%2Fwelcome.png?alt=media&token=95f93ce5-989b-4dd6-a805-b8624a1711f3";
  const logo = "https://firebasestorage.googleapis.com/v0/b/findtableapp-1feb9.appspot.com/o/assets%2Flogo.png?alt=media&token=4f9f121e-b3f3-4956-b791-cce1bb5cf753";
  
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <View style={styles.imageContainer}>
        <Image source={imageWelcome} style={styles.imageWelcome} />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.buttonBox}>

          <Text style={styles.welcomeText}>Let's have dinner?!</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign Up')}>
            <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
        <Image source={logo} style={styles.imageLogo} />
      </View>
      </View>
      
    </View>


  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  imageContainer: {
    //flex: 1,
    height: '40%',
    padding: 10,
  },
  mainContainer: {
    //flex: 2,
    height: '60%',
    backgroundColor: '#00043C',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  buttonBox: {
    marginHorizontal: 20,
    display: 'flex'
  },
  logoContainer: {
    //flex: 1,
    //height: '10%',
    paddingVertical: 60,
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
    padding: 10,
    marginTop: 50,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF707E',
    padding: 10,
    marginHorizontal: 0,
    marginVertical: 15,
    borderRadius: 10,
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
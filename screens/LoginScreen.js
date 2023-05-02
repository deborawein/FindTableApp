
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Fragment } from 'react';

export function LoginScreen(props) {
  const imageWelcome = "https://firebasestorage.googleapis.com/v0/b/findtableapp-1feb9.appspot.com/o/assets%2Fwelcome.png?alt=media&token=95f93ce5-989b-4dd6-a805-b8624a1711f3"
  const logo = "https://firebasestorage.googleapis.com/v0/b/findtableapp-1feb9.appspot.com/o/assets%2Flogo.png?alt=media&token=4f9f121e-b3f3-4956-b791-cce1bb5cf753"

  const navigation = useNavigation();

  return (
    <Fragment>
      <SafeAreaView style={styles.page}>
        <StatusBar barStyle="dark-content" />
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
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#00043C' }}></SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  imageContainer: {
    height: '40%',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    height: '60%',
    backgroundColor: '#00043C',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  buttonBox: {
    marginHorizontal: 10,
    display: 'flex'
  },
  logoContainer: {
    paddingVertical: 20,
    backgroundColor: '#00043C',
    justifyContent: 'center'
  },

  imageWelcome: {
    contentFit: 'cover',
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
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  imageLogo: {
    contentFit: 'cover',
    height: 50,
    width: 200,
    alignSelf: 'center'
  },
});
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";

const logo = require('../assets/logo.png');
const xmark = require('../assets/xmark.png');

export function SigninScreen(props) {
    const [email, setEmail] = useState("")
    const [validEmail, setValidEmail] = useState(false)
    const [password, setPassword] = useState("")
    const [validPassword, setValidPassword] = useState(false)
    const [validForm, setValidForm] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
        if (email.indexOf('@') > 0) {
            setValidEmail(true)
        }
        else {
            setValidEmail(false)
        }
    }, [email])

    useEffect(() => {
        if (password.length >= 8) {
            setValidPassword(true)
        }
        else {
            setValidPassword(false)
        }
    }, [password])

    useEffect(() => {
        if (validEmail && validPassword) {
            setValidForm(true)
        }
        else {
            setValidForm(false)
        }
    })



    return (
        <View style={styles.page}>
            <TouchableOpacity onPress={() => navigation.popToTop()}>
                <Image source={xmark} style={styles.xmark} />
            </TouchableOpacity>
            <View style={styles.containerImage}>
                <Image source={logo} style={styles.imageLogo} />
            </View>
            <View style={styles.containerLogin}>
                <Text style={styles.titleText}>Login Now</Text>
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="you@domain.com"
                    value={email}
                    onChangeText={(emailText) => setEmail(emailText)}
                />
                <Text style={styles.inputText}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="minimum 8 characters"
                    value={password}
                    onChangeText={(pwText) => setPassword(pwText)}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={(validForm) ? styles.button : styles.buttonDisabled}
                    disabled={(validForm) ? false : true}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerSignup}
                    onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={styles.signupText}>
                        Don't have an account? Sign up here.
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#00043C',
    },
    containerImage: {
        flex: 1,
        justifyContent: 'center'
    },
    containerLogin: {
        flex: 2,
    },
    containerSignup: {
        flex: 1,
    },
    imageLogo: {
        resizeMode: 'contain',
        width: 250,
        height: '100%',
        alignSelf: 'center'
    },
    titleText: {
        color: '#FFA3AC',
        textAlign: 'center',
        padding: 20,
        fontSize: 24,
        marginVertical: 20,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderWidth: 1,
        borderColor: '#BFBFC1',
        borderRadius: 5,
        fontSize: 12,
        marginHorizontal: 50,
    },
    validInput: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderWidth: 1,
        borderColor: "FF707E",
        borderRadius: 5,
        fontSize: 12,
        marginHorizontal: 50,
    },
    inputText: {
        color: '#ff707e',
        fontSize: 12,
        marginHorizontal: 50,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#FF707E',
        padding: 10,
        marginHorizontal: 80,
        marginVertical: 30,
        borderRadius: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    buttonDisabled: {
        backgroundColor: '#BFBFC1',
        padding: 10,
        marginHorizontal: 80,
        marginVertical: 30,
        borderRadius: 20,
    },
    signupText: {
        textAlign: 'center',
        color: '#FF707E',
        marginVertical: 10,
    },
    xmark: {
        alignSelf: 'flex-end',
        width: 20,
        height: 20,
        marginTop: 25,
        marginEnd: 10,


    }

})
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useContext, useEffect, useState } from 'react'
import { Image } from 'expo-image';
//React Navigation
import { useNavigation } from "@react-navigation/native";
//context
import { AuthContext } from "../context/AuthContext";
//icon
import { AntDesign } from '@expo/vector-icons';

export function SignupScreen(props) {
    const logo = "https://firebasestorage.googleapis.com/v0/b/findtableapp-1feb9.appspot.com/o/assets%2Flogo.png?alt=media&token=4f9f121e-b3f3-4956-b791-cce1bb5cf753";

    const [email, setEmail] = useState("")
    const [validEmail, setValidEmail] = useState(false)
    const [password, setPassword] = useState("")
    const [validPassword, setValidPassword] = useState(false)
    const [validForm, setValidForm] = useState(false)

    const navigation = useNavigation()
    const authStatus = useContext(AuthContext)

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

    useEffect(() => {
        if (authStatus) {
            navigation.reset({ index: 0, routes: [{ name: "HomeTab" }] })
        }
    }, [authStatus])

    return (

        <SafeAreaView style={styles.page}>
            <StatusBar barStyle="light-content" />
            <TouchableOpacity style={styles.xmark} onPress={() => navigation.popToTop()}>
                <AntDesign name="closecircle" size={24} color="#FF707E" />
            </TouchableOpacity>
            <View style={styles.containerImage}>
                <Image source={logo} style={styles.imageLogo} />
            </View>
            <View>
                <Text style={styles.titleText}>Register Here</Text>
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                    style={(validEmail) ? styles.validInput : styles.input}
                    placeholder="you@domain.com"
                    value={email}
                    onChangeText={(emailText) => setEmail(emailText)}
                />
                <Text style={styles.inputText}>Password</Text>
                <TextInput
                    style={(validPassword) ? styles.validInput : styles.input}
                    placeholder="minimum 8 characters"
                    value={password}
                    onChangeText={(pwText) => setPassword(pwText)}
                    secureTextEntry={true}
                />
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        style={(validForm) ? styles.button : styles.buttonDisabled}
                        disabled={(validForm) ? false : true}
                        onPress={() => props.handler(email, password)}
                    >
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Sign In')}
                    >
                        <Text style={styles.signinText}>
                            Already have an account? Sign in here.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#00043C',
    },
    containerImage: {
        paddingVertical: 50,
        justifyContent: 'center'
    },
    imageLogo: {
        contentFit: 'cover',
        width: 250,
        height: 70,
        alignSelf: 'center'
    },
    titleText: {
        color: '#FFA3AC',
        textAlign: 'center',
        padding: 20,
        fontSize: 28,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderWidth: 1,
        borderColor: '#BFBFC1',
        borderRadius: 5,
        fontSize: 12,
        marginHorizontal: 20,
    },
    validInput: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderWidth: 1,
        borderColor: "FF707E",
        borderRadius: 5,
        fontSize: 14,
        marginHorizontal: 20,
    },
    inputText: {
        color: '#FF707E',
        fontSize: 14,
        marginHorizontal: 20,
        marginTop: 10,
    },
    buttonBox: {
        marginHorizontal: 10,
        display: 'flex'
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
    buttonDisabled: {
        backgroundColor: '#BFBFC1',
        padding: 15,
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 15,
    },
    signinText: {
        textAlign: 'center',
        color: '#FF707E',
        marginVertical: 10,
    },
    xmark: {
        alignSelf: 'flex-end',
        marginTop: 20,
        marginEnd: 20,
    }
})
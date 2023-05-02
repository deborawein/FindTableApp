import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";
import { useEffect, useState, useContext } from 'react'
import { useNavigation } from "@react-navigation/native";
//context
import { AuthContext } from "../context/AuthContext";
//icon
import { AntDesign } from '@expo/vector-icons';

export function SigninScreen(props) {
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
            // navigation.navigate('HomeTab')
            navigation.reset({ index: 0, routes: [{ name: 'HomeTab' }] })
        }
    }, [authStatus])

    return (
        <SafeAreaView style={styles.page}>
            <ScrollView>
                <TouchableOpacity style={styles.xmark} onPress={() => navigation.popToTop()}>
                    <AntDesign name="closecircle" size={24} color="#FF707E" />
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
                    <View style={styles.buttonBox}>
                        <TouchableOpacity
                            style={(validForm) ? styles.button : styles.buttonDisabled}
                            disabled={(validForm) ? false : true}
                            onPress={() => props.handler(email, password)}
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
            </ScrollView>
        </SafeAreaView>
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
        marginHorizontal: 20,
    },
    validInput: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderWidth: 1,
        borderColor: "FF707E",
        borderRadius: 5,
        fontSize: 12,
        marginHorizontal: 20,
    },
    inputText: {
        color: '#ff707e',
        fontSize: 12,
        marginHorizontal: 20,
        marginTop: 10,
    },
    buttonBox: {
        marginHorizontal: 20,
        display: 'flex'
    },
    button: {
        backgroundColor: '#FF707E',
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    buttonDisabled: {
        backgroundColor: '#BFBFC1',
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 15,
        borderRadius: 10,
    },
    signupText: {
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
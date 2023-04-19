import { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'

export const TimeButton = (props) => {
    const [disabled, setDisabled] = useState(false)
    useEffect(() => {
        if (disabled) {
            setDisabled(true)
        }
        else {
            setDisabled(false)
        }
    })
    return (
        <TouchableOpacity
            style={(disabled) ? styles.timeButton : styles.timeButtonDisabled}
            onPress={() => setDisabled(!disabled)}
        >
            <Text style={styles.timeButtonText}>{props.time}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    timeButton: {
        backgroundColor: '#FF707E',
        padding: 10,
        borderRadius: 10,
        borderColor: '#999999',
        borderWidth: 1,
    },

    timeButtonDisabled: {
        backgroundColor: '#BFBFC1',
        padding: 10,
        borderRadius: 10,
        borderColor: '#999999',
        borderWidth: 1,
    },
    timeButtonText: {
        color: 'black',
        textAlign: 'center'

    }


})

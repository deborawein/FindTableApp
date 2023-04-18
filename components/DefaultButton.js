import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export const DefaultButton = (props) => {
    return(
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )}
    
    const styles = StyleSheet.create({
        
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
      });
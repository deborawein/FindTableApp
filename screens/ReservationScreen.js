import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useRoute } from '@react-navigation/native'

export function ReservationScreen (props) {
    const route = useRoute();
    const {id, name, type, suburb, state} = route.params
    return( 
        <View>
            <Text>{name}</Text>
            <Text>{type} • {suburb}, {state}</Text>
            
        </View>
    )
}
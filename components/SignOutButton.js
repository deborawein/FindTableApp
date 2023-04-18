import { TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export const SignOutButton = (props) => {
    return (
        <TouchableOpacity onPress={() => props.signOutHandler()}>
        <AntDesign name="logout" size={24} color="#FFA3AC" />
        </TouchableOpacity>
    )
}

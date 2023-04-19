import { TouchableOpacity} from 'react-native';
import { FBAuthContext } from '../context/FBAuthContext';
import { AntDesign } from '@expo/vector-icons';
import { useContext } from 'react';
import { signOut } from 'firebase/auth'

export function SignOutButton( props ) {
    const FBauth = useContext(FBAuthContext)
    
    const SignOutHandler = () => {
      signOut(FBauth).then( 
        () => {
          // signed out
        }
      )
    }
    return (

        <TouchableOpacity onPress={() => SignOutHandler()}>
        <AntDesign name="logout" size={24} color="#FFA3AC" />
        </TouchableOpacity>
    )
}

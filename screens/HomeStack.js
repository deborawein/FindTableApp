import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import { HomeScreen } from './HomeScreen';
import { ReserveScreen } from './ReserveScreen';

const Stack = createNativeStackNavigator();

export function HomeStack(props) {

  return (
    <Stack.Navigator >
      <Stack.Screen name='Home' options={{ headerShown: false }}>
        {(props) => <HomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name='Reservation'
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#00043C' },
          headerTintColor: '#FFA3AC',
        }} >
        {(props) => <ReserveScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
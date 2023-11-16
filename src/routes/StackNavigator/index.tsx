import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../../screens/Welcome/index'
import { Login } from '../../screens/Login/index'
import { Perfis } from '../../screens/Perfis';

const Stack = createNativeStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Perfis' component={Perfis} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
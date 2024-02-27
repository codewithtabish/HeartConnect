import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import TabLayout from './tab-navigator';
import Modal from '../main/modal';
import MainSplashScreen from '../auth/AuthSplashScreen/AuthSplashScreen';



const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainSplash"
      screenOptions={{headerShown:false,
      cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS}}>
        <Stack.Screen name='MainSplash' component={MainSplashScreen} options={{headerShown:false}}/>
        <Stack.Screen
          name="TabNavigator"
          component={TabLayout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{ presentation: 'modal', headerLeft: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

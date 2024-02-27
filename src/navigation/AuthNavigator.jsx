import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import OnBoardScreen from '../auth/onboard/OnBoardScreen';
import AuthWelcomeScreen from '../auth/welcome/AuthWelcomeScreen';
import AuthSplashScreen from '../auth/AuthSplashScreen/AuthSplashScreen';




const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <NavigationContainer

    >
       <Stack.Navigator
       initialRouteName='AuthSplash'
       screenOptions={{}}>
         <Stack.Screen name='AuthSplash'
        component={AuthSplashScreen}
        options={{headerShown:false}}/>
        
        <Stack.Screen name='OnBoard'
        component={OnBoardScreen}
        options={{headerShown:false}}/>


        <Stack.Screen name='Welcome'
        component={AuthWelcomeScreen}
        options={{headerShown:false}}/>

       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigator



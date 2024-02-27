import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import HomeMainScreen from './HomeMainScreen';




const Stack=createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeMainScreen' component={HomeMainScreen}
        options={{headerShown:false}} />
   
    </Stack.Navigator>

  )
}

export default HomeStack

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthNavigator from './AuthNavigator'
import RootStack from '.'

const AppIndex = () => {
    const [isLogin, setisLogin] = React.useState(false)


    return <>{!isLogin?<AuthNavigator/>:<RootStack/>}</>

}

export default AppIndex

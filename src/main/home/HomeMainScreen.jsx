import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeMainScreen = () => {
  return (
    <View>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi consectetur voluptatibus maxime sequi assumenda aperiam error esse id dicta dolorem quis vel, amet, harum cumque laboriosam, eaque placeat perferendis beatae.
      </Text>
            <StatusBar
        backgroundColor="#FF6584"  // Set the background color
        barStyle="light-content"   // Set the text color (light or dark content)
      />
    </View>
  )
}

export default HomeMainScreen

const styles = StyleSheet.create({})
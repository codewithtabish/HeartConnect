import { ImageBackground, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";

const AuthWelcomeScreen = () => {

  const navigation=useNavigation()






  return (
   <ImageBackground source={require('../../../assets/datingtwo.png')}
   className="flex-1 justify-center items-center">
     <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
     
     <View className="absolute left-0 right-0 flex-row justify-center " 
     style={{height:responsiveScreenHeight(30),
    bottom:responsiveScreenHeight(5)}}>
    <View style={{width:responsiveScreenWidth(85),
  margin:"auto"}}>
      <Text 
      className="text-center text-white tracking-widest font-semibold italic"
      
      style={{fontSize:responsiveScreenFontSize(3.1),
        fontFamily:"outfit-semi",
      textAlign:"center"}}>  Discover Love with HeartConnect</Text>
      <Text style={{fontSize:responsiveScreenFontSize(2.1),width:responsiveScreenWidth(85),
      
    marginTop:responsiveScreenHeight(1.5)}} className="text-light-secondary text-[8px] italic text-center 
      leading-6 tracking-widest
      max-w-[85%] mx-auto


      ">
        Swipe, Match, Connect – Love Awaits You
         and Fall in Love
      </Text>
      <TouchableOpacity 
      className="bg-light-primary p-3 rounded-md "
      style={{width:responsiveScreenWidth(85),
        marginTop:responsiveScreenHeight(3)
        
    
      }}>
        <Text className="text-white italic text-center" 
        style={{fontSize:responsiveScreenFontSize(2.1),
        fontFamily:"outfit"
        }}>
          Getting Started
        </Text>
      </TouchableOpacity>
    </View>

     </View>


    


   </ImageBackground>
  )
}

export default AuthWelcomeScreen

const styles = StyleSheet.create({})
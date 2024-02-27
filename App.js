import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppIndex from './src/navigation/AppIndex';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
     <SafeAreaView className="flex-1 ">

    <PaperProvider>
      <AppIndex/>
          <StatusBar
        backgroundColor="#FF6584"  // Set the background color
        barStyle="light-content"   // Set the text color (light or dark content)
      />


    </PaperProvider>
    </SafeAreaView>
  );
}


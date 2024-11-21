import { StyleSheet, Text, View } from 'react-native'
import {SplashScreen, Stack} from 'expo-router';
import { useFonts } from 'expo-font'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    Inter_18ptBlack: require("../assets/fonts/Inter_18ptBlack.ttf"),
    Inter_18ptBold: require("../assets/fonts/Inter_18ptBold.ttf"),
    Inter_18ptLight: require("../assets/fonts/Inter_18ptLight.ttf"),
    Inter_18ptRegular: require("../assets/fonts/Inter_18ptRegular.ttf"),
    Inter_18ptSemiBold: require("../assets/fonts/Inter_18ptSemiBold.ttf"),
    Inter_28ptRegular: require("../assets/fonts/Inter_28ptRegular.ttf"),
  });

  useEffect(() => {
    if(error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded,error])

  if(!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name= "index" options ={{headerShown: false}}/>
      <Stack.Screen name= "(tabs)" options ={{headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout


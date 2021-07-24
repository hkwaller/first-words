import React, { useEffect } from 'react'
import { view } from '@risingstack/react-easy-state'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { getWords } from './src/backend/api'
import { state } from 'src/backend/data'
import Start from 'src/screens/start/Start'
import FreePlay from 'src/screens/free-play/FreePlay'
import { getValueFor } from 'src/config/helpers'
import Alphabet from 'src/screens/alphabet/Alphabet'
import { View } from 'react-native'

const Stack = createStackNavigator()

function App() {
  useEffect(() => {
    async function t() {
      const settings = await getValueFor('settings')
      const words = await getWords()
      state.words = words
      state.settings = JSON.parse(settings as any)
    }

    t()
  }, [])

  let [fontsLoaded] = useFonts({
    AvocadoCreamy: require('./assets/fonts/AvocadoCreamy.otf'),
  })

  if (!fontsLoaded || !state.settings) return <AppLoading />

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: 'white',
          },
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="FreePlay" component={FreePlay} />
          <Stack.Screen name="Alphabet" component={Alphabet} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default view(App)

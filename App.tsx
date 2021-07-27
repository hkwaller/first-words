import React, { useEffect } from 'react'
import { view } from '@risingstack/react-easy-state'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { getCategories, getWords } from './src/backend/api'
import { state } from 'src/backend/data'
import Start from 'src/screens/start/Start'
import FreePlay from 'src/screens/free-play/FreePlay'
import { getValueFor } from 'src/config/helpers'
import Alphabet from 'src/screens/alphabet/Alphabet'
import FreePlaySetup from 'src/screens/free-play/FreePlaySetup'

const Stack = createStackNavigator()

function App() {
  useEffect(() => {
    async function t() {
      const settings = await getValueFor('settings')
      const words = await getWords()
      const categories = await getCategories()

      state.words = words
      state.categories = categories
      state.settings = JSON.parse(settings as any)
    }

    t()
  }, [])

  let [fontsLoaded] = useFonts({
    MyHappyEndingRegular: require('./assets/fonts/MyHappyEndingRegular.ttf'),
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
          <Stack.Screen name="FreePlaySetup" component={FreePlaySetup} />
          <Stack.Screen name="Alphabet" component={Alphabet} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default view(App)

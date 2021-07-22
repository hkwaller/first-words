import React, { useEffect } from 'react'
import { view } from '@risingstack/react-easy-state'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import { getWords } from './src/backend/api'
import { state } from 'src/backend/data'
import Start from 'src/screens/start/Start'
import FreePlay from 'src/screens/free-play/FreePlay'
import { getValueFor } from 'src/config/helpers'

i18n.translations = {
  sv: { start: 'Börja att lära' },
  en: { start: 'Start to learn' },
  no: { start: 'Begynn å lære' },
}

const Stack = createStackNavigator()

function App() {
  useEffect(() => {
    async function t() {
      const words = await getWords()
      const settings = await getValueFor('settings')

      state.words = words
      state.settings = JSON.parse(settings as any)
    }

    t()
  }, [])

  let [fontsLoaded] = useFonts({
    AvocadoCreamy: require('./assets/fonts/AvocadoCreamy.otf'),
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="FreePlay" component={FreePlay} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default view(App)

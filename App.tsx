import React, { useEffect } from 'react'
import { view } from '@risingstack/react-easy-state'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { getWords } from './src/backend/api'
import { store } from 'src/backend/data'
import Start from 'src/screens/start/Start'
import FreePlay from 'src/screens/free-play/FreePlay'

const Stack = createStackNavigator()

function App() {
  useEffect(() => {
    async function t() {
      const words = await getWords()
      store.words = words
    }

    t()
  }, [])

  let [fontsLoaded] = useFonts({
    AvocadoCreamy: require('./assets/fonts/AvocadoCreamy.otf'),
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="FreePlay" component={FreePlay} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default view(App)

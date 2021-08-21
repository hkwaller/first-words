import React, { useEffect, useState } from 'react'
import { view } from '@risingstack/react-easy-state'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { getCategories, getWords } from './src/backend/api'
import { state } from 'src/backend/data'
import Start from 'src/screens/start/Start'
import FreePlay from 'src/screens/free-play/FreePlay'
import { getValueFor, save } from 'src/config/helpers'
import Alphabet from 'src/screens/alphabet/Alphabet'
import FreePlaySetup from 'src/screens/free-play/FreePlaySetup'
import { colors } from 'src/config/constants'
import { View } from 'react-native'
import AlphabetSetup from 'src/screens/alphabet/AlphabetSetup'
import Settings from 'src/screens/settings/Settings'

const Stack = createStackNavigator()

function App() {
  const [everythingLoaded, setEverythingLoaded] = useState(false)

  useEffect(() => {
    async function t() {
      const words = await getWords()
      const categories = await getCategories()
      const settings = await getValueFor('settings')
      state.words = words
      state.categories = categories
      if (settings) {
        state.settings = JSON.parse(settings as any)
        state.settings.lastWordCount = words.length
        save('settings', JSON.stringify(state.settings))
      }
      setEverythingLoaded(true)
    }

    t()
  }, [])

  let [fontsLoaded] = useFonts({
    MyHappyEndingRegular: require('./assets/fonts/MyHappyEndingRegular.ttf'),
  })

  if (!fontsLoaded || !everythingLoaded)
    return <View style={{ width: '100%', height: '100%', backgroundColor: colors.lightPink }} />

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
          <Stack.Screen name="FreePlay" component={FreePlay} options={{ gestureEnabled: false }} />
          <Stack.Screen name="FreePlaySetup" component={FreePlaySetup} />
          <Stack.Screen name="AlphabetSetup" component={AlphabetSetup} />
          <Stack.Screen name="Alphabet" component={Alphabet} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default view(App)

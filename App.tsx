import React, { useEffect } from 'react'
import { view } from '@risingstack/react-easy-state'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { getWords } from './src/backend/api'
import { state } from './src/backend/data'
import Start from './src/screens/start/Start'
import FreePlay from './src/screens/free-play/FreePlay'

const Stack = createStackNavigator()

function App() {
  useEffect(() => {
    async function t() {
      const words = await getWords()
      state.words = words
    }

    t()
  }, [])

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

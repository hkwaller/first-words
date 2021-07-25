import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Slider from 'src/components/Slider'
import { colors } from 'src/config/constants'

type Props = {}

function FreePlaySetup() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.blue }}>
      <Text>FreePlaySetup</Text>
      <View style={{ backgroundColor: 'white', padding: 30, marginHorizontal: 20, marginTop: 200 }}>
        <Slider />
      </View>
    </SafeAreaView>
  )
}

export default FreePlaySetup

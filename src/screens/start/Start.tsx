import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

function Start(props: Props) {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>Start</Text>
      <Button
        title="Free play"
        onPress={() => {
          navigation.navigate('FreePlay')
        }}
      />
    </SafeAreaView>
  )
}
export default Start

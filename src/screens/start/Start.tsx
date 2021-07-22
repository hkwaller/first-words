import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from 'src/components/styled'
import Button from 'src/components/Button'

type Props = {}

function Start(props: Props) {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ padding: 30 }}>
      <Header style={{ marginBottom: 40 }}>Start</Header>
      <Button
        title="Begynn å lære"
        onPress={() => {
          navigation.navigate('FreePlay')
        }}
      />
    </SafeAreaView>
  )
}
export default Start

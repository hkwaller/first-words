import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, Button, ButtonText } from 'src/components/styled'

type Props = {}

function Start(props: Props) {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ padding: 30 }}>
      <Header style={{ marginBottom: 40 }}>Start</Header>
      <Button
        onPress={() => {
          navigation.navigate('FreePlay')
        }}
      >
        <ButtonText>Begynn å lære!</ButtonText>
      </Button>
    </SafeAreaView>
  )
}
export default Start

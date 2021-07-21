import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

type Props = {}

function Start(props: Props) {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Start</Text>
      <Button
        title="Free play"
        onPress={() => {
          navigation.navigate('FreePlay')
        }}
      />
    </View>
  )
}
export default Start

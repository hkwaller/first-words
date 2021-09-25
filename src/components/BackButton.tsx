import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { BodyText } from './styled'

function BackButton() {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        position: 'absolute',
        top: 40,
        left: 20,
        transform: [{ rotateZ: '4deg' }],
        zIndex: 100,
      }}
    >
      <BodyText
        style={{
          fontSize: 100,
        }}
      >{`<`}</BodyText>
    </TouchableOpacity>
  )
}

export default BackButton

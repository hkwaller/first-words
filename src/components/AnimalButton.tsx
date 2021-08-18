import { view } from '@risingstack/react-easy-state'
import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { state } from 'src/backend/data'
import { Animal } from 'src/backend/types'
import { BodyText } from './styled'

type Props = {
  animal: Animal
}

function AnimalButton({ animal }: Props) {
  return (
    <View style={{ margin: 20, marginBottom: 0, padding: 10 }}>
      {state.settings.animal?.name === animal.name && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: state.settings.animal.color,
            opacity: 0.4,
          }}
        />
      )}
      <TouchableOpacity onPress={() => (state.settings.animal = animal)}>
        <Image
          source={animal.image}
          width={50}
          height={50}
          style={{ height: 50, width: 50 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  )
}
export default view(AnimalButton)

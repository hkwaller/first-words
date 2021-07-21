import React from 'react'
import { View, Text, Image } from 'react-native'
import { urlFor } from '../backend/api'

type Props = {
  word: Word
}

function Word({ word }: Props) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>{word.word}</Text>
      <Image
        width={100}
        height={100}
        resizeMode="contain"
        style={{ width: 150, height: 150 }}
        source={{ uri: urlFor(word.image).width(150).url()! }}
      />
    </View>
  )
}
export default Word

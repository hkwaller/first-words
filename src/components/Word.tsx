import React from 'react'
import { Text, Image } from 'react-native'
import { state } from 'src/backend/data'
import { CARD_WIDTH } from 'src/config/constants'
import { urlFor } from '../backend/api'
import CardContainer from './CardContainer'

type Props = {
  word: Word
  index: number
  isActive: boolean
  updateIndex: () => void
}

function Word({ word, index, isActive, updateIndex }: Props) {
  return (
    <CardContainer index={index} updateIndex={updateIndex} isActive={isActive}>
      <Text style={{ fontFamily: 'AvocadoCreamy', fontSize: 50, marginBottom: 20 }}>
        {word.word[state.settings?.language || 'no']}
      </Text>
      <Image
        width={100}
        height={100}
        resizeMode="contain"
        style={{ width: CARD_WIDTH - 70, height: CARD_WIDTH - 70 }}
        source={{ uri: urlFor(word.image).width(CARD_WIDTH).url()! }}
      />
    </CardContainer>
  )
}

export default Word

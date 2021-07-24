import React from 'react'
import { Text } from 'react-native'
import CardContainer from './CardContainer'

type Props = {
  letter: string
  index: number
  isActive: boolean
  updateIndex: () => void
}

function Letter({ letter, index, updateIndex, isActive }: Props) {
  return (
    <CardContainer index={index} updateIndex={updateIndex} isActive={isActive}>
      <Text style={{ fontSize: 200, marginBottom: 20 }}>{letter.toUpperCase()}</Text>
    </CardContainer>
  )
}

export default Letter

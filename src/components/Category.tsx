import { view } from '@risingstack/react-easy-state'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { BodyText } from './styled'

type Props = {
  title: string
  onPress: () => void
  isActive: boolean
}

function Category({ title, onPress, isActive }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { borderWidth: 4, borderColor: isActive ? 'black' : 'white' }]}
    >
      <BodyText>{title}</BodyText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
  },
})

export default view(Category)

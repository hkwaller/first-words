import { view } from '@risingstack/react-easy-state'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { state } from 'src/backend/data'
import { BodyText } from './styled'

type Props = {
  title: string
  id: string
}

function Category({ title, id }: Props) {
  const isActive = state.currentCategories.indexOf(id) > -1

  return (
    <TouchableOpacity
      onPress={() => {
        if (isActive) {
          const indexToRemove = state.currentCategories.findIndex(i => i === id)
          console.log('🚀 ~ file: Category.tsx ~ line 20 ~ Category ~ indexToRemove', indexToRemove)
          state.currentCategories.splice(indexToRemove, 1)
          return
        } else {
          state.currentCategories = [...state.currentCategories, id]
          return
        }
      }}
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

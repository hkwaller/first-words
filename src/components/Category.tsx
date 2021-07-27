import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { state } from 'src/backend/data'

type Props = {
  title: string
  isActive: boolean
}

function Category({ title, isActive }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, { borderWidth: 4, borderColor: isActive ? 'black' : 'white' }]}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
})

export default Category

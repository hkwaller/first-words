import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { colors } from 'src/config/constants'
import { BodyText } from './styled'

type Props = {
  title: string
  active: boolean
  onToggle: () => void
}

function Checkbox({ title, active, onToggle }: Props) {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.container}>
      <View style={[styles.checkbox, { backgroundColor: active ? colors.lightPink : 'white' }]} />
      <BodyText>{title}</BodyText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 4,
    borderColor: 'black',
    marginRight: 16,
  },
})

export default Checkbox

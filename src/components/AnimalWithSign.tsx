import { view } from '@risingstack/react-easy-state'
import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { state } from 'src/backend/data'
import { BodyText } from './styled'

type Props = {
  number: number
}

function AnimalWithSign({ number }: Props) {
  if (!state.settings.animal) return null

  return (
    <View style={{ justifyContent: 'flex-start', marginLeft: -20, maxHeight: 60 }}>
      <Image
        source={state.settings.animal.image}
        width={60}
        height={50}
        resizeMode="contain"
        style={{ width: 60, height: 50 }}
      />
      <View style={styles.container}>
        <BodyText style={{ fontSize: 30 }}>{number}</BodyText>
        <View
          style={[styles.hand, styles.leftHand, { backgroundColor: state.settings.animal.color }]}
        />
        <View
          style={[styles.hand, styles.rightHand, { backgroundColor: state.settings.animal.color }]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    width: 60,
    alignItems: 'center',
    marginTop: -5,
  },
  hand: {
    borderRadius: 10,
    width: 10,
    height: 10,
    position: 'absolute',
    top: 5,
  },
  leftHand: {
    left: -8,
  },
  rightHand: {
    right: -8,
  },
})

export default view(AnimalWithSign)

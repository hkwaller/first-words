import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Image } from 'react-native'
import { colors } from 'src/config/constants'
import { BodyText } from './styled'

type Props = {
  number: number
}

function PigWithCard({ number }: Props) {
  return (
    <View style={{ justifyContent: 'flex-start' }}>
      <Image
        source={require('../../assets/pig.png')}
        width={60}
        height={50}
        resizeMode="contain"
        style={{ width: 60, height: 50 }}
      />
      <View style={styles.container}>
        <BodyText>{number}</BodyText>
        <View style={[styles.hand, styles.leftHand]} />
        <View style={[styles.hand, styles.rightHand]} />
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
    backgroundColor: colors.pink,
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

export default PigWithCard
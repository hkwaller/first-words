import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { Image, StyleSheet, View } from 'react-native'
import { ButtonContainer, ButtonText } from './styled'
import BottomLine from './svg/BottomLine'
import TopLine from './svg/TopLine'

type Props = {
  onPress: () => void
  title: string
  backgroundColor?: string
  rotation?: number
  invert?: boolean
  image: ImageSourcePropType
}

function Button({
  onPress,
  title,
  backgroundColor = '#AAE0FC',
  rotation = -2,
  image,
  invert = false,
}: Props) {
  const topColor = invert ? '#A0C1FF' : '#F3AECE'
  const bottomColor = invert ? '#F3AECE' : '#A0C1FF'

  return (
    <ButtonContainer onPress={onPress} color={backgroundColor} rotation={rotation}>
      <TopLine style={[styles.line, styles.topLine]} color={topColor} />
      <BottomLine style={[styles.line, styles.bottomLine]} color={bottomColor} />
      <View style={styles.container}>
        {invert ? (
          <>
            <Image source={image} />
            <ButtonText style={{ marginHorizontal: 15, color: '#636161' }}>{title}</ButtonText>
          </>
        ) : (
          <>
            <ButtonText style={{ marginHorizontal: 15, color: '#636161' }}>{title}</ButtonText>
            <Image source={image} />
          </>
        )}
      </View>
    </ButtonContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  line: {
    position: 'absolute',
  },
  topLine: {
    right: 20,
    top: -5,
  },
  bottomLine: {
    left: 20,
    bottom: -5,
  },
})
export default Button

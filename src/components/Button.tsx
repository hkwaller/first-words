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
  image?: ImageSourcePropType
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
    <ButtonContainer
      onPress={onPress}
      color={backgroundColor}
      rotation={rotation}
      style={{
        marginBottom: 20,
        shadowColor: 'gray',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 3,
      }}
    >
      <TopLine style={[styles.line, styles.topLine]} color={topColor} />
      <BottomLine style={[styles.line, styles.bottomLine]} color={bottomColor} />
      <View style={styles.container}>
        {invert ? (
          <>
            {image && <Image source={image} />}
            <ButtonText style={{ marginHorizontal: 15 }}>{title}</ButtonText>
          </>
        ) : (
          <>
            <ButtonText style={{ marginHorizontal: 15 }}>{title}</ButtonText>
            {image && <Image source={image} />}
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
    top: 0,
  },
  bottomLine: {
    left: 20,
    bottom: 0,
  },
})
export default Button

import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from 'src/config/constants'
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
  const topColor = invert ? colors.lightBlue : colors.lightPink
  const bottomColor = invert ? colors.lightPink : colors.lightBlue

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
            {image && <Image resizeMode="contain" source={image} style={{ flex: 1 }} />}
            <ButtonText style={{ marginHorizontal: 15, flex: 2, textAlign: 'center' }}>
              {title}
            </ButtonText>
          </>
        ) : (
          <>
            <ButtonText style={{ marginHorizontal: 15, flex: 2, textAlign: 'center' }}>
              {title}
            </ButtonText>
            {image && <Image resizeMode="contain" source={image} style={{ flex: 1 }} />}
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

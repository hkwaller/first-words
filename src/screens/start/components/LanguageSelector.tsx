import { view } from '@risingstack/react-easy-state'
import React, { useState } from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { state } from 'src/backend/data'
import { Languages } from 'src/backend/types'
import LanguageButton from 'src/components/LanguageButton'
import { BodyText } from 'src/components/styled'
import { colors } from 'src/config/constants'
import { save } from 'src/config/helpers'

function LanguageSelector() {
  const x = useSharedValue(0)
  const [viewWidth, setViewWidth] = useState(0)

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(x.value) }],
    }
  })

  return (
    <View style={{ alignItems: 'center' }}>
      <BodyText style={{ marginTop: 20 }}>Hvilket språk ønsker du?</BodyText>
      <View
        style={{ flexDirection: 'row', marginTop: 20 }}
        onLayout={({ nativeEvent }) => {
          setViewWidth(nativeEvent.layout.width)
        }}
      >
        <Animated.View
          style={[
            {
              height: 50,
              width: viewWidth / 3,
              backgroundColor: colors.pink,
              position: 'absolute',
              bottom: 0,
              borderRadius: 20,
            },
            style,
          ]}
        />
        <LanguageButton
          langCode="no"
          onPress={() => {
            saveLanguage('no')
            x.value = 0
          }}
        />
        <LanguageButton
          langCode="sv"
          onPress={() => {
            saveLanguage('sv')
            x.value = viewWidth / 3
          }}
        />
        <LanguageButton
          langCode="en"
          onPress={() => {
            saveLanguage('en')
            x.value = (viewWidth / 3) * 2
          }}
        />
      </View>
    </View>
  )
}

function saveLanguage(lang: Languages) {
  state.settings.language = lang
  save('settings', JSON.stringify(state.settings))
}

export default view(LanguageSelector)

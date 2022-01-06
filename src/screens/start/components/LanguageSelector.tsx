import { view } from '@risingstack/react-easy-state'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { state } from 'src/backend/data'
import { t } from 'src/backend/lang'
import { Languages } from 'src/backend/types'
import LanguageButton from 'src/components/LanguageButton'
import { BodyText } from 'src/components/styled'
import { colors, SCREEN_WIDTH } from 'src/config/constants'
import { save } from 'src/config/helpers'

function LanguageSelector() {
  const x = useSharedValue(0)
  const [viewWidth, setViewWidth] = useState(0)

  useEffect(() => {
    if (state.settings.language === 'no') {
      x.value = (viewWidth / 3) * 2
    } else if (state.settings.language === 'sv') {
      x.value = viewWidth / 3
    }
  }, [viewWidth])

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(x.value) }],
    }
  })

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        width: SCREEN_WIDTH - 40,
        borderRadius: 50,
      }}
    >
      <BodyText style={{ marginTop: 20 }}>{t('settings_language')}</BodyText>
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
          langCode="en"
          onPress={() => {
            saveLanguage('en')
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
          langCode="no"
          onPress={() => {
            saveLanguage('no')
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

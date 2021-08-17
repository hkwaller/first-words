import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { uniq } from 'lodash'
import { view } from '@risingstack/react-easy-state'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import Word from 'src/components/Word'
import { state } from 'src/backend/data'
import Button from 'src/components/Button'
import { t } from 'src/backend/lang'
import { save } from 'src/config/helpers'
import { s } from 'src/config/constants'

function FreePlay() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navigation = useNavigation()

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(s[activeIndex]),
    }
  }, [activeIndex])

  return (
    <>
      <Animated.View style={[styles.container, backgroundStyle]}>
        {state.currentGame.map((word, index) => {
          console.log('🚀 ~ file: FreePlay.tsx ~ line 40 ~ {state.currentGame.map ~ word', word)

          return (
            <Word
              key={word._id}
              index={index}
              isActive={activeIndex === index}
              updateIndex={() => {
                setActiveIndex(index + 1)
              }}
              {...{ word }}
            />
          )
        })}
        {activeIndex === state.currentGame.length && (
          <Button
            key="0"
            title={t('back')}
            onPress={() => {
              navigation.goBack()
              state.settings.wordsPlayed = state.settings.wordsPlayed + state.currentGame.length
              state.settings.wordsLearnt = uniq([
                ...state.settings.wordsLearnt,
                ...state.currentGame.map(w => w._id),
              ])

              save('settings', JSON.stringify(state.settings))
            }}
          />
        )}
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
})

export function getColor() {
  'worklet'

  return (
    'hsl(' +
    360 * Math.random() +
    ',' +
    (25 + 70 * Math.random()) +
    '%,' +
    (85 + 10 * Math.random()) +
    '%)'
  )
}

export function getRandomColor() {
  'worklet'
  const colors = ['#0CECDD', '#FFF338', '#FF67E7', '#C400FF']

  return colors[Math.round(Math.random() * colors.length)]
}

export default view(FreePlay)

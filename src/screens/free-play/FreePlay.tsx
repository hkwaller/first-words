import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { view } from '@risingstack/react-easy-state'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import Word from 'src/components/Word'
import { state } from 'src/backend/data'
import Button from 'src/components/Button'
import { t } from 'src/backend/lang'
import { save } from 'src/config/helpers'

function FreePlay() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navigation = useNavigation()

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(getColor()),
    }
  }, [activeIndex])

  return (
    <>
      <Animated.View style={[styles.container, backgroundStyle]}>
        {state.currentGame.map((word, index) => {
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
            title={t('back')}
            onPress={() => {
              navigation.goBack()
              state.settings.wordsPlayed = state.settings.wordsPlayed + state.currentGame.length
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

export default view(FreePlay)

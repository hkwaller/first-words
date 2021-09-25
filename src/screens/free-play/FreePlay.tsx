import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { uniq } from 'lodash'
import { view } from '@risingstack/react-easy-state'
import Animated from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import Word from 'src/components/Word'
import { state } from 'src/backend/data'
import Button from 'src/components/Button'
import { t } from 'src/backend/lang'
import { save } from 'src/config/helpers'
import { colors, s } from 'src/config/constants'
import SmallButton from 'src/components/SmallButton'
import BackButton from 'src/components/BackButton'

function FreePlay() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navigation = useNavigation()

  // const backgroundStyle = useAnimatedStyle(() => {
  //   return {
  //     backgroundColor: withTiming(s[activeIndex]),
  //   }
  // }, [activeIndex])

  function handleReturn(to?: 'start' | undefined) {
    state.settings.wordsPlayed = state.settings.wordsPlayed + state.currentGame.length

    state.settings.wordsLearnt = uniq([
      ...(state.settings.wordsLearnt || []),
      ...state.currentGame.map(w => w._id),
    ])

    save('settings', JSON.stringify(state.settings))

    if (to === 'start') {
      navigation.navigate('Start')
    } else {
      navigation.goBack()
    }
  }

  return (
    <>
      <Animated.View style={[styles.container]}>
        <BackButton />

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
          <View style={{ marginHorizontal: 20, width: '90%' }}>
            <Button title={t('play_more')} onPress={() => handleReturn('start')} />
            <SmallButton
              title={t('back')}
              onPress={() => handleReturn()}
              backgroundColor={colors.yellow}
            />
          </View>
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

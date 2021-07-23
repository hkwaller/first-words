import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { view } from '@risingstack/react-easy-state'
import { StatusBar } from 'expo-status-bar'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import Word from 'src/components/Word'
import { state } from 'src/backend/data'
import Button from 'src/components/Button'
import { t } from 'src/backend/lang'

function getColor() {
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
      <StatusBar style="auto" />
      <Animated.View style={[styles.container, backgroundStyle]}>
        {state.words.map((word, index) => {
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
        {activeIndex === state.words.length && (
          <Button
            title={t('back')}
            onPress={() => {
              navigation.goBack()
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

export default view(FreePlay)

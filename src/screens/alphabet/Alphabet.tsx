import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { state } from 'src/backend/data'
import { t } from 'src/backend/lang'
import Button from 'src/components/Button'
import Word from 'src/components/Word'
import { getColor } from '../free-play/FreePlay'
import { view } from '@risingstack/react-easy-state'
import Letter from 'src/components/Letter'

type Props = {}

function Alphabet() {
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
        {state.alphabet.map((letter, index) => {
          return (
            <Letter
              key={index}
              index={index}
              isActive={activeIndex === index}
              updateIndex={() => {
                setActiveIndex(index + 1)
              }}
              {...{ letter }}
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

export default view(Alphabet)

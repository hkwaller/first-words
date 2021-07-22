import React, { useState } from 'react'
import { Button, StyleSheet } from 'react-native'
import { view } from '@risingstack/react-easy-state'
import { StatusBar } from 'expo-status-bar'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import Word from 'src/components/Word'
import { store } from 'src/backend/data'
import { colors } from 'src/config/constants'
import { useNavigation } from '@react-navigation/native'

function FreePlay() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navigation = useNavigation()

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(colors[activeIndex]),
    }
  })

  return (
    <>
      <StatusBar style="auto" />
      <Animated.View style={[styles.container, backgroundStyle]}>
        {store.words.map((word, index) => {
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
        {activeIndex === store.words.length && (
          <Button
            title="Tilbake"
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

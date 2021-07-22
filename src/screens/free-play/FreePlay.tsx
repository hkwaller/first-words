import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { view } from '@risingstack/react-easy-state'
import { StatusBar } from 'expo-status-bar'
import Word from 'src/components/Word'
import { store } from 'src/backend/data'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'src/config/constants'
import { useSharedValue } from 'react-native-reanimated'

function FreePlay() {
  const activeIndex = useSharedValue(0)

  function setActiveIndex(val: number) {
    'worklet'
    activeIndex.value = val
  }
  console.log(
    '🚀 ~ file: FreePlay.tsx ~ line 16 ~ setActiveIndex ~ activeIndex.value',
    activeIndex.value,
  )

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {store.words.map((word, index) => {
          return (
            <Word
              key={word._id}
              index={index}
              isActive={activeIndex.value === index}
              setActiveIndex={setActiveIndex}
              {...{ word }}
            />
          )
        })}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default view(FreePlay)

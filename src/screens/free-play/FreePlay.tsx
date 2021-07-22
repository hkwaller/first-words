import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { view } from '@risingstack/react-easy-state'
import { StatusBar } from 'expo-status-bar'
import Word from 'src/components/Word'
import { store } from 'src/backend/data'
import { useSharedValue } from 'react-native-reanimated'

function FreePlay() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
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
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AEE1E1',
  },
})

export default view(FreePlay)

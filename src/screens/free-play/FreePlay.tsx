import React from 'react'
import { view } from '@risingstack/react-easy-state'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ScrollView } from 'react-native'
import { state } from 'backend/data'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'constants'
import Word from 'components/Word'

function FreePlay() {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.container} horizontal directionalLockEnabled>
        {state.words.map(word => {
          return <Word key={word._id} {...{ word }} />
        })}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - 200,
  },
})

export default view(FreePlay)

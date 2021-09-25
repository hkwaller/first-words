import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { view } from '@risingstack/react-easy-state'
import { state } from 'src/backend/data'
import { t } from 'src/backend/lang'
import Button from 'src/components/Button'
import { getColor } from '../free-play/FreePlay'
import Letter from 'src/components/Letter'
import SmallButton from 'src/components/SmallButton'
import { colors } from 'src/config/constants'
import { save } from 'src/config/helpers'

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
      <Animated.View style={[styles.container, backgroundStyle]}>
        {state.currentLettersGame.split('').map((letter, index) => {
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

        {activeIndex === state.currentLettersGame.length && (
          <View style={{ marginHorizontal: 20, width: '90%', alignItems: 'center' }}>
            <Button
              title={t('play_more')}
              onPress={() => {
                state.settings.wordsPlayed =
                  state.settings.wordsPlayed + state.currentLettersGame.length
                save('settings', JSON.stringify(state.settings))
                navigation.goBack()
              }}
            />
            <SmallButton
              title={t('back')}
              onPress={() => navigation.navigate('Start')}
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

export default view(Alphabet)

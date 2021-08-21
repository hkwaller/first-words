import React, { useCallback, useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { view } from '@risingstack/react-easy-state'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { getUnusedWords, shuffle } from 'src/backend/api'
import { state } from 'src/backend/data'
import Slider from 'src/components/Slider'
import { BodyText, ButtonText, NavigationButton } from 'src/components/styled'
import { colors, SCREEN_WIDTH } from 'src/config/constants'
import { t } from 'src/backend/lang'
import Category from 'src/components/Category'
import Checkbox from 'src/components/Checkbox'
import { Word } from 'src/backend/types'
import Screen from 'src/components/Screen'

function FreePlaySetup() {
  const [showNewWords, setShowNewWords] = useState(false)
  const [currentWords, setCurrentWords] = useState<Word[]>(state.words)

  useFocusEffect(
    useCallback(() => {
      updateWords()
    }, []),
  )

  function updateWords() {
    let words = state.words

    if (state.currentCategories.length > 0) {
      words = state.words.filter(word => {
        return state.currentCategories.indexOf(word.category._id) > -1
      })
    }

    if (showNewWords && state.settings.wordsLearnt?.length > 0) {
      words = getUnusedWords(words, state.settings.wordsLearnt)
    }

    setCurrentWords(words)
  }

  useEffect(() => {
    updateWords()
  }, [state.currentCategories, showNewWords])

  const navigation = useNavigation()
  const y = useSharedValue(-1000)

  const animatedStyle = useAnimatedStyle(() => ({
    bottom: withTiming(y.value),
  }))

  function handleNavigation() {
    let words = state.words
    if (showNewWords) {
      words = getUnusedWords(state.words, state.settings.wordsLearnt)
    }
    const shuffledWords = shuffle(words)

    state.currentGame =
      state.currentCategories.length === 0
        ? shuffledWords.slice(0, state.settings.preferredAmountWords)
        : shuffledWords
            .filter(word => {
              return state.currentCategories.indexOf(word.category._id) > -1
            })
            .slice(0, state.settings.preferredAmountWords)

    if (state.currentGame.length === 0) {
      y.value = 0

      setTimeout(() => {
        y.value = -1000
      }, 3000)

      return
    }

    navigation.navigate('FreePlay')
  }

  return (
    <>
      <Screen
        button={
          <NavigationButton color={colors.blue} onPress={handleNavigation}>
            <ButtonText>Start</ButtonText>
          </NavigationButton>
        }
      >
        <BodyText style={styles.bodyText}>{t('setup_word_amount')}</BodyText>
        <View style={styles.sliderContainer}>
          <Slider type="words" />
        </View>
        <Checkbox
          title={t('only_new_words')}
          active={showNewWords}
          onToggle={() => setShowNewWords(!showNewWords)}
        />
        <BodyText style={styles.bodyText}>
          {t('setup_categories')} ({t('words')}: {currentWords.length})
        </BodyText>
        <View style={styles.categoryContainer}>
          {state.categories.map(category => {
            const isActive = state.currentCategories.indexOf(category._id) > -1

            return (
              <Category
                key={category._id}
                title={category.title[state.settings.language || 'no']}
                isActive={isActive}
                onPress={() => {
                  if (isActive) {
                    state.currentCategories = state.currentCategories.filter(
                      i => i !== category._id,
                    )
                    return
                  } else {
                    state.currentCategories = [...state.currentCategories, category._id]
                    return
                  }
                }}
              />
            )
          })}
        </View>
      </Screen>
      <Animated.View style={[styles.modal, animatedStyle]}>
        <BodyText style={{ textAlign: 'center' }}>{t('no_new_words')}</BodyText>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    paddingTop: 40,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  categoryContainer: { alignItems: 'flex-start', flexWrap: 'wrap', flexDirection: 'row' },
  sliderContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonContainer: {
    color: colors.darkGray,
    textAlign: 'center',
    transform: [{ rotateZ: '-6deg' }],
  },
  bodyText: { marginTop: 40, marginBottom: 12 },
  modal: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    padding: 30,
  },
})

export default view(FreePlaySetup)

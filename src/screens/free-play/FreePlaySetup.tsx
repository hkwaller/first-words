import React, { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { view } from '@risingstack/react-easy-state'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { getUnusedWords, shuffle } from 'src/backend/api'
import { state } from 'src/backend/data'
import Slider from 'src/components/Slider'
import { BodyText, ButtonText, NavigationButton } from 'src/components/styled'
import { colors, SCREEN_WIDTH } from 'src/config/constants'
import TopLine from 'src/components/svg/TopLine'
import BottomLine from 'src/components/svg/BottomLine'
import { t } from 'src/backend/lang'
import Category from 'src/components/Category'
import Checkbox from 'src/components/Checkbox'
import { Word } from 'src/backend/types'

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

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TopLine style={[styles.line, styles.topLine]} color={colors.lightBlue} />
        <BottomLine style={[styles.line, styles.bottomLine]} color={colors.lightPink} />
        <ButtonText style={styles.buttonContainer}>{t('start')}</ButtonText>
        <BodyText style={styles.bodyText}>{t('setup_word_amount')}</BodyText>
        <View style={styles.sliderContainer}>
          <Slider />
        </View>
        <Checkbox
          title={t('only_new_words')}
          active={showNewWords}
          onToggle={() => setShowNewWords(!showNewWords)}
        />
        <BodyText style={styles.bodyText}>
          {t('setup_categories')} ({t('words')}: {currentWords.length})
        </BodyText>
        <View style={{ alignItems: 'flex-start', flexWrap: 'wrap', flexDirection: 'row' }}>
          {state.categories.map(category => {
            return (
              <Category
                key={category._id}
                id={category._id}
                title={category.title[state.settings.language || 'no']}
              />
            )
          })}
        </View>
        <View style={{ flex: 1 }} />
        <NavigationButton
          color={colors.yellow}
          onPress={() => {
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
          }}
        >
          <ButtonText>Start</ButtonText>
        </NavigationButton>
      </SafeAreaView>
      <Animated.View style={[styles.modal, animatedStyle]}>
        <BodyText>{t('no_new_words')}</BodyText>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    paddingTop: 100,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  line: {
    position: 'absolute',
  },
  topLine: {
    right: 20,
    top: 0,
  },
  bottomLine: {
    left: 20,
    bottom: 0,
  },
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
  },
})

export default view(FreePlaySetup)

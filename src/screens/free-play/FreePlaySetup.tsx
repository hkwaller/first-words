import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { view } from '@risingstack/react-easy-state'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getUnusedWords, shuffle } from 'src/backend/api'
import { state } from 'src/backend/data'
import Slider from 'src/components/Slider'
import { BodyText, ButtonText, NavigationButton } from 'src/components/styled'
import { colors } from 'src/config/constants'
import TopLine from 'src/components/svg/TopLine'
import BottomLine from 'src/components/svg/BottomLine'
import { t } from 'src/backend/lang'
import Category from 'src/components/Category'
import Checkbox from 'src/components/Checkbox'

function FreePlaySetup() {
  const [showNewWords, setShowNewWords] = useState(false)
  const navigation = useNavigation()
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
        <BodyText style={styles.bodyText}>{t('setup_categories')}</BodyText>
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

            navigation.navigate('FreePlay')
          }}
        >
          <ButtonText>Start</ButtonText>
        </NavigationButton>
      </SafeAreaView>
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
})

export default view(FreePlaySetup)

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { t } from 'src/backend/lang'
import Category from 'src/components/Category'
import Slider from 'src/components/Slider'
import { ButtonText, BodyText, NavigationButton } from 'src/components/styled'
import { ALPHABET, colors, CONSONANTS, SCREEN_WIDTH, VOWELS } from 'src/config/constants'
import { state } from 'src/backend/data'
import { view } from '@risingstack/react-easy-state'
import { shuffleLetters } from 'src/backend/api'
import Screen from 'src/components/Screen'

type Props = {}

function AlphabetSetup(props: Props) {
  const navigation = useNavigation()

  function handleNavigation() {
    let gameLetters = shuffleLetters(ALPHABET[state.settings.language].split(''))

    if (state.currentLetterCategory === 'vowels') {
      gameLetters = gameLetters.filter(letter => VOWELS.test(letter))
    } else if (state.currentLetterCategory === 'consonants') {
      gameLetters = gameLetters.filter(letter => CONSONANTS.test(letter))
    }

    if (state.currentLetterCasing === 'lowercase') {
      gameLetters = gameLetters.join('').toLowerCase().split('')
    } else if (state.currentLetterCasing === 'uppercase') {
      gameLetters = gameLetters.join('').toUpperCase().split('')
    } else if (state.currentLetterCasing === 'mixed') {
      gameLetters = shuffleLetters(gameLetters).map((letter, index) =>
        index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase(),
      )

      gameLetters = shuffleLetters(gameLetters)
    }

    state.currentLettersGame = gameLetters.slice(0, state.settings.preferredAmountLetters).join('')
    navigation.navigate('Alphabet')
  }

  return (
    <Screen
      button={
        <NavigationButton color={colors.blue} onPress={handleNavigation}>
          <ButtonText>Start</ButtonText>
        </NavigationButton>
      }
    >
      <ButtonText style={styles.buttonContainer}>{t('start')}</ButtonText>
      <BodyText style={styles.bodyText}>{t('setup_letters')}</BodyText>
      <View style={styles.sliderContainer}>
        <Slider type="letters" />
      </View>

      <BodyText style={styles.bodyText}>{t('setup_letters_type')}</BodyText>
      <View style={styles.categoryContainer}>
        <Category
          title={t('setup_letters_type_all')}
          onPress={() => (state.currentLetterCategory = 'all')}
          isActive={state.currentLetterCategory === 'all'}
        />
        <Category
          title={t('setup_letters_type_consonants')}
          onPress={() => (state.currentLetterCategory = 'consonants')}
          isActive={state.currentLetterCategory === 'consonants'}
        />
        <Category
          title={t('setup_letters_type_vowels')}
          onPress={() => (state.currentLetterCategory = 'vowels')}
          isActive={state.currentLetterCategory === 'vowels'}
        />
      </View>
      <BodyText style={styles.bodyText}>{t('setup_letters_casing')}</BodyText>

      <View style={styles.categoryContainer}>
        <Category
          title={t('setup_letters_casing_uppercase')}
          onPress={() => (state.currentLetterCasing = 'uppercase')}
          isActive={state.currentLetterCasing === 'uppercase'}
        />
        <Category
          title={t('setup_letters_casing_lowercase')}
          onPress={() => (state.currentLetterCasing = 'lowercase')}
          isActive={state.currentLetterCasing === 'lowercase'}
        />
        <Category
          title={t('setup_letters_casing_mixed')}
          onPress={() => (state.currentLetterCasing = 'mixed')}
          isActive={state.currentLetterCasing === 'mixed'}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
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
  categoryContainer: { alignItems: 'flex-start', flexWrap: 'wrap', flexDirection: 'row' },
})

export default view(AlphabetSetup)

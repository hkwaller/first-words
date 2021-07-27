import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { view } from '@risingstack/react-easy-state'
import { SafeAreaView } from 'react-native-safe-area-context'
import { shuffle } from 'src/backend/api'
import { state } from 'src/backend/data'
import Slider from 'src/components/Slider'
import { BodyText, ButtonText, NavigationButton } from 'src/components/styled'
import { colors } from 'src/config/constants'
import TopLine from 'src/components/svg/TopLine'
import BottomLine from 'src/components/svg/BottomLine'
import { t } from 'src/backend/lang'

type Props = {}

function FreePlaySetup() {
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
        {/*<BodyText style={styles.bodyText}>{t('setup_categories')}</BodyText>
         <View style={{ alignItems: 'flex-start' }}>
          {state.categories.map(category => {
            return (
              <Category
                key={category._id}
                title={category.title[state.settings.language]}
                isActive={    
                  state.currentCategories.indexOf((c: Category) => c._id === category._id) > 0
                }
              />
            )
          })}
        </View> */}
        <View style={{ flex: 1 }} />
        <NavigationButton
          color={colors.yellow}
          onPress={() => {
            const shuffledWords = shuffle(state.words)
            state.currentGame = shuffledWords.slice(0, state.settings.preferredAmountWords)
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
  },
  buttonContainer: {
    color: colors.darkGray,
    textAlign: 'center',
    transform: [{ rotateZ: '-6deg' }],
  },
  bodyText: { marginTop: 40, marginBottom: 12 },
})

export default view(FreePlaySetup)

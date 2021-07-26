import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { view } from '@risingstack/react-easy-state'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { shuffle } from 'src/backend/api'
import { state } from 'src/backend/data'
import Slider from 'src/components/Slider'
import { BodyText, ButtonText, NavigationButton } from 'src/components/styled'
import { colors } from 'src/config/constants'

type Props = {}

function FreePlaySetup() {
  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.blue,
        paddingTop: 100,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
      }}
    >
      <ButtonText
        style={{ color: colors.darkGray, textAlign: 'center', transform: [{ rotateZ: '-6deg' }] }}
      >
        Ordlek
      </ButtonText>
      <BodyText style={{ marginTop: 40, marginBottom: 12 }}>Hur många ord?</BodyText>
      <View
        style={{
          backgroundColor: 'white',
          padding: 30,
          borderRadius: 40,
        }}
      >
        <Slider />
      </View>
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
  )
}

export default view(FreePlaySetup)

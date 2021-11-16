import React, { useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { view } from '@risingstack/react-easy-state'
import Button from 'src/components/Button'
import { state } from 'src/backend/data'
import { t } from 'src/backend/lang'
import SmallButton from 'src/components/SmallButton'
import { shuffle, shuffleLetters } from 'src/backend/api'
import { ALPHABET, colors } from 'src/config/constants'
import StartHeader from './components/StartHeader'
import IntroModal from 'src/components/intro-modal/IntroModal'
import { BodyText } from 'src/components/styled'
import { save } from 'src/config/helpers'
import BuyModal from 'src/components/buy-modal/BuyModal'

function Start() {
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()
  const [buyModalVisible, setBuyModalVisible] = useState(false)

  useEffect(() => {
    if (state.settings.name?.length === 0) {
      setModalVisible(true)
    }
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 200 }}>
      <SafeAreaView style={{ padding: 30, alignItems: 'center' }}>
        <StartHeader />

        {state.settings.wordsPlayed < 100 || state.settings.purchased ? (
          <>
            <Button
              title={t('start')}
              image={require('../../../assets/monkey.png')}
              onPress={() => {
                state.words = shuffle(state.words)
                navigation.navigate('FreePlaySetup')
              }}
            />
            <Button
              title={t('abc')}
              backgroundColor="#FCEA9F"
              image={require('../../../assets/moose.png')}
              rotation={2}
              invert
              onPress={() => {
                state.alphabet = shuffleLetters(
                  ALPHABET[state.settings.language].split(''),
                ) as string[]
                navigation.navigate('AlphabetSetup')
              }}
            />
          </>
        ) : null}

        <SmallButton
          title={t('settings')}
          onPress={() => navigation.navigate('Settings')}
          backgroundColor={colors.lightPink}
        />
        {__DEV__ && (
          <SmallButton
            title="Ta bort köp"
            backgroundColor={colors.lightPink}
            onPress={() => {
              state.settings.purchased = false
            }}
          />
        )}
        {state.settings.wordsPlayed > 50 && !state.settings.purchased ? (
          <View
            style={{ backgroundColor: 'gray', padding: 20, borderRadius: 20, marginBottom: 20 }}
          >
            <BodyText style={{ color: 'white' }}>
              {`${t('begging_1')} ${100 - state.settings.wordsPlayed} ${t('begging_2')}`}
            </BodyText>
            <SmallButton title={t('buy')} onPress={() => setBuyModalVisible(true)} />
          </View>
        ) : null}
      </SafeAreaView>
      <IntroModal isVisible={modalVisible} setModalVisible={setModalVisible} />
      <BuyModal isVisible={buyModalVisible} setModalVisible={setBuyModalVisible} />
    </ScrollView>
  )
}

export default view(Start)

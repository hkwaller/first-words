import React, { useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { view } from '@risingstack/react-easy-state'
import { requestPurchase, requestSubscription, useIAP } from 'react-native-iap'
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

function Start() {
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()

  const {
    connected,
    products,
    getProducts,
    finishTransaction,
    currentPurchase,
    currentPurchaseError,
  } = useIAP()

  useEffect(() => {
    async function s() {
      console.log('🚀 ~ file: Start.tsx ~ line 31 ~ Start ~ products', connected)
    }
    s()
    if (state.settings.name?.length === 0) {
      setModalVisible(true)
    }
  }, [])

  useEffect(() => {
    if (connected) {
      getProducts(['astrid_premium'])
    }
  }, [connected])

  useEffect(() => {
    const checkCurrentPurchase = async (purchase: any): Promise<void> => {
      if (purchase) {
        const receipt = purchase.transactionReceipt
        if (receipt)
          try {
            const ackResult = await finishTransaction(purchase)
            console.log('ackResult', ackResult)
          } catch (ackErr) {
            console.warn('ackErr', ackErr)
          }
      }
    }
    checkCurrentPurchase(currentPurchase)
  }, [currentPurchase, finishTransaction])

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 200 }}>
      <SafeAreaView style={{ padding: 30 }}>
        <StartHeader />

        {state.settings.wordsPlayed < 200 || state.settings.hasPurchased ? (
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
          title="Innstillinger"
          onPress={() => navigation.navigate('Settings')}
          backgroundColor={colors.lightPink}
        />
        {state.settings.wordsPlayed > 1 && !state.settings.hasPurchased ? (
          <View
            style={{ backgroundColor: 'gray', padding: 20, borderRadius: 20, marginBottom: 20 }}
          >
            <BodyText style={{ color: 'white' }}>
              Det å lage app tar tid, og koster penger å drifte. Du får spille 200 ord og bokstaver
              gratis. Men etter det må vi ta betalt. Akkurat nå har du{' '}
              {200 - state.settings.wordsPlayed} ord og bokstaver igjen å lære. Lykke til!
            </BodyText>
            <SmallButton
              title="Kjøp"
              onPress={async () => {
                const purchase = await requestPurchase('astrid_premium')

                if (purchase) {
                  state.settings.hasPurchased = true
                  save('settings', JSON.stringify(state.settings))
                }
              }}
            />
          </View>
        ) : null}
      </SafeAreaView>
      <IntroModal isVisible={modalVisible} setModalVisible={setModalVisible} />
    </ScrollView>
  )
}

export default view(Start)

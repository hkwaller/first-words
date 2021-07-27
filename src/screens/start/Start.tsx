import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { view } from '@risingstack/react-easy-state'
import Button from 'src/components/Button'
import { state } from 'src/backend/data'
import { t } from 'src/backend/lang'
import SmallButton from 'src/components/SmallButton'
import { shuffle, shuffleLetters } from 'src/backend/api'
import { ALPHABET } from 'src/config/constants'
import StartHeader from './components/StartHeader'
import IntroModal from 'src/components/intro-modal/IntroModal'
import LanguageSelector from './components/LanguageSelector'

function Start() {
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    if (state.settings.name.length === 0) {
      setModalVisible(true)
    }
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 200 }}>
      <SafeAreaView style={{ padding: 30 }}>
        <StartHeader />
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
            state.alphabet = shuffleLetters(ALPHABET[state.settings.language].split('')) as string[]
            navigation.navigate('Alphabet')
          }}
        />
        <SmallButton title="modal" onPress={() => setModalVisible(!modalVisible)} />
        <LanguageSelector />
      </SafeAreaView>
      <IntroModal isVisible={modalVisible} setModalVisible={setModalVisible} />
    </ScrollView>
  )
}

export default view(Start)

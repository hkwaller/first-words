import React from 'react'
import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { view } from '@risingstack/react-easy-state'
import Button from 'src/components/Button'
import { state } from 'src/backend/data'
import { t } from 'src/backend/lang'
import { save } from 'src/config/helpers'
import SmallButton from 'src/components/SmallButton'
import { shuffle, shuffleLetters } from 'src/backend/api'
import { ALPHABET } from 'src/config/constants'
import StartHeader from './components/StartHeader'

function Start() {
  const navigation = useNavigation()

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 200 }}>
      <SafeAreaView style={{ padding: 30 }}>
        <StartHeader />
        <Button
          title={t('start')}
          image={require('../../../assets/monkey.png')}
          onPress={() => {
            state.words = shuffle(state.words)
            navigation.navigate('FreePlay')
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
              ALPHABET[state.settings?.language || 'no'].split(''),
            ) as string[]
            navigation.navigate('Alphabet')
          }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
          <SmallButton title="Norsk" onPress={() => saveLanguage('no')} />
          <SmallButton title="Svenska" onPress={() => saveLanguage('sv')} />
          <SmallButton title="English" onPress={() => saveLanguage('en')} />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

function saveLanguage(lang: Languages) {
  state.settings = { ...state.settings, language: lang, name: 'Amalie' }
  save('settings', JSON.stringify(state.settings))
}

export default view(Start)

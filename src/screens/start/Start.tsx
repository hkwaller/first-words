import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { view } from '@risingstack/react-easy-state'
import { Header } from 'src/components/styled'
import Button from 'src/components/Button'
import { state } from 'src/backend/data'
import { t } from 'src/backend/lang'
import { save } from 'src/config/helpers'
import SmallButton from 'src/components/SmallButton'

function Start() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ padding: 30 }}>
      <Header style={{ marginBottom: 40 }}>emma.</Header>
      <Button
        title={t('start')}
        onPress={() => {
          navigation.navigate('FreePlay')
        }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
        <SmallButton title="Norsk" onPress={() => saveLanguage('no')} />
        <SmallButton title="Svenska" onPress={() => saveLanguage('sv')} />
        <SmallButton title="English" onPress={() => saveLanguage('en')} />
      </View>
    </SafeAreaView>
  )
}

function saveLanguage(lang: Languages) {
  state.settings = { language: lang }
  save('settings', JSON.stringify(state.settings))
}

export default view(Start)

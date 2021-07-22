import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import i18n from 'i18n-js'
import { Header } from 'src/components/styled'
import Button from 'src/components/Button'
import { state } from 'src/backend/data'

type Props = {}

function Start() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ padding: 30 }}>
      <Header style={{ marginBottom: 40 }}>emma.</Header>
      <Button
        title={i18n.t('start')}
        onPress={() => {
          navigation.navigate('FreePlay')
        }}
      />
      <View style={{ flexDirection: 'row' }}>
        <Button
          title="Norsk"
          onPress={() =>
            (state.settings = {
              language: 'no',
            })
          }
        />
        <Button
          title="Svenska"
          onPress={() =>
            (state.settings = {
              language: 'sv',
            })
          }
        />
        <Button
          title="English"
          onPress={() =>
            (state.settings = {
              language: 'en',
            })
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default Start

import { view } from '@risingstack/react-easy-state'
import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { state } from 'src/backend/data'
import { t } from 'src/backend/lang'
import AnimalButton from 'src/components/AnimalButton'
import Screen from 'src/components/Screen'
import { BodyText } from 'src/components/styled'
import { animals, colors } from 'src/config/constants'
import LanguageSelector from '../start/components/LanguageSelector'
import Restore from '../start/components/Restore'

function Settings() {
  return (
    <Screen>
      <View style={{ marginVertical: 20 }} />
      <LanguageSelector />
      <View style={styles.animalWrapper}>
        <BodyText style={{ marginTop: 40 }}>{t('settings_animal')}</BodyText>
        <View style={styles.animalContainer}>
          {animals.map(animal => {
            return <AnimalButton key={animal.name} {...{ animal }} />
          })}
        </View>
      </View>
      <View style={[styles.animalWrapper, { paddingHorizontal: 30 }]}>
        <BodyText style={{ marginTop: 40 }}>{t('settings_name')}</BodyText>
        <TextInput
          placeholder={t('settings_name_placeholder')}
          style={styles.input}
          placeholderTextColor="gray"
          value={state.settings.name}
          onChangeText={text => {
            state.settings.name = text
          }}
        />
      </View>
      <Restore />
    </Screen>
  )
}

const styles = StyleSheet.create({
  animalWrapper: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingBottom: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  animalContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#F3F5F7',
    borderBottomColor: colors.lightBlue,
    borderBottomWidth: 4,
    fontSize: 24,
    width: '100%',
  },
})

export default view(Settings)

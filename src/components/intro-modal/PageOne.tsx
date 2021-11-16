import { view } from '@risingstack/react-easy-state'
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import { state } from 'src/backend/data'
import { t } from 'src/backend/lang'
import { colors, SCREEN_WIDTH } from 'src/config/constants'
import LanguageSelector from 'src/screens/start/components/LanguageSelector'
import { BodyText, Header, NavigationButton } from '../styled'

function PageOne({ navigate }: { navigate: () => void }) {
  const [name, setName] = useState(state.settings.name || '')

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <Header>{t('welcome')}</Header>
      <LanguageSelector />
      <Text style={{ marginVertical: 40 }}>
        {t('intro_1')} <Text style={{ fontWeight: '800' }}>Astrid</Text>
        {t('intro_2')}
      </Text>
      <Text>{t('intro_3')}</Text>
      <TextInput
        placeholder={t('settings_name_placeholder')}
        style={styles.input}
        placeholderTextColor="gray"
        value={name}
        onChangeText={text => {
          setName(text)
        }}
      />
      <View style={{ flex: 1 }} />
      <NavigationButton
        color={colors.lightBlue}
        onPress={() => {
          if (name.length === 0) return

          navigate()
          state.settings.name = name
        }}
      >
        <BodyText>{t('continue')}</BodyText>
      </NavigationButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    width: SCREEN_WIDTH - 40,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#EEEEEE',
    borderBottomColor: colors.lightBlue,
    borderBottomWidth: 4,
    fontSize: 24,
    width: '100%',
  },
})

export default view(PageOne)

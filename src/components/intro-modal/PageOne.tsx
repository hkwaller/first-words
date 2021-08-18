import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { state } from 'src/backend/data'
import { colors, SCREEN_WIDTH } from 'src/config/constants'
import LanguageSelector from 'src/screens/start/components/LanguageSelector'
import { BodyText, Header, NavigationButton } from '../styled'

function PageOne({ navigate }: { navigate: () => void }) {
  const [name, setName] = useState(state.settings.name || '')

  return (
    <View style={styles.pageContainer}>
      {state.settings.name?.length === 0 && <Header>Velkommen</Header>}
      <LanguageSelector />
      <Text style={{ marginVertical: 40 }}>
        Velkommen til <Text style={{ fontWeight: '800' }}>Astrid</Text>, appen som lærer ditt barn
        ord og bokstaver i et rasende tempo.
      </Text>
      <Text>Før vi starter så må vi bare etablere et par ting. </Text>
      <TextInput
        placeholder="Hva heter barnet?"
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
        <BodyText>Videre</BodyText>
      </NavigationButton>
    </View>
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

export default PageOne

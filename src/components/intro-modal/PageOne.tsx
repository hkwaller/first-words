import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { state } from 'src/backend/data'
import { colors, SCREEN_WIDTH } from 'src/config/constants'
import Button from '../Button'
import { Header } from '../styled'

function PageOne({ navigate }: { navigate: () => void }) {
  const [name, setName] = useState('')

  return (
    <View style={styles.pageContainer}>
      <Header>Velkommen</Header>
      <Text style={{ marginVertical: 40 }}>
        Velkommen til Emma, appen som lærer deg ord og bokstaver i et rasende tempo.
      </Text>
      <Text>Før vi starter så må vi bare etablere et par ting. </Text>

      <TextInput
        placeholder="Hva heter du?"
        style={styles.input}
        placeholderTextColor="gray"
        onChangeText={text => {
          setName(text)
        }}
      />
      <View style={{ flex: 1 }} />
      <Button
        title="Videre"
        onPress={() => {
          navigate()
          state.settings.name = name
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    width: SCREEN_WIDTH - 40,
    padding: 20,
  },
  input: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#EEEEEE',
    borderBottomColor: colors.lightBlue,
    borderBottomWidth: 4,
    fontSize: 24,
  },
})

export default PageOne

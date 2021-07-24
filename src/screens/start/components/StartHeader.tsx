import { view } from '@risingstack/react-easy-state'
import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { state } from 'src/backend/data'
import { t } from 'src/backend/lang'
import { BodyText, NameText } from 'src/components/styled'

function StartHeader() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/pig.png')} />
      <BodyText style={{ marginTop: 40 }}>{t('welcome')}</BodyText>
      <NameText>{state.settings.name}</NameText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
})

export default view(StartHeader)

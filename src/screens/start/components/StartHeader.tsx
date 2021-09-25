import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { view } from '@risingstack/react-easy-state'
import { state } from 'src/backend/data'
import { t } from 'src/backend/lang'
import { BodyText, NameText } from 'src/components/styled'

function StartHeader() {
  if (!state.settings.animal) return null

  return (
    <View style={styles.container}>
      <Image
        source={state.settings.animal.image}
        resizeMode="contain"
        style={{ width: 100, marginRight: 40 }}
      />
      <View>
        <BodyText style={{ marginTop: 20 }}>{t('welcome')}</BodyText>
        <NameText style={{ color: state.settings.animal.color }}>{state.settings.name}</NameText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 30,
  },
})

export default view(StartHeader)

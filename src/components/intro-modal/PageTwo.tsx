import { view } from '@risingstack/react-easy-state'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { t } from 'src/backend/lang'
import { animals, colors, SCREEN_WIDTH } from 'src/config/constants'
import AnimalButton from '../AnimalButton'
import { BodyText, NavigationButton } from '../styled'

function PageTwo({ close }: { close: () => void }) {
  return (
    <View style={styles.pageContainer}>
      <BodyText>{t('settings_animal')}</BodyText>
      <View style={styles.animalContainer}>
        {animals.map(animal => {
          return <AnimalButton key={animal.name} {...{ animal }} />
        })}
      </View>
      <View style={{ flex: 1 }} />
      <NavigationButton onPress={close} color={colors.yellow}>
        <BodyText>Start</BodyText>
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
  animalContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: -20,
  },
})

export default view(PageTwo)

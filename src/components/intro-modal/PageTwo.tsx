import React from 'react'
import { View, StyleSheet } from 'react-native'
import { animals, colors, SCREEN_WIDTH } from 'src/config/constants'
import AnimalButton from '../AnimalButton'
import { BodyText, NavigationButton } from '../styled'

function PageTwo({ close }: { close: () => void }) {
  return (
    <View style={styles.pageContainer}>
      <BodyText>Hvilket dyr vil du være?</BodyText>
      <View style={styles.animalContainer}>
        {animals.map(animal => {
          return <AnimalButton key={animal.name} {...{ animal }} />
        })}
      </View>
      <View style={{ flex: 1 }} />
      <NavigationButton onPress={close} color={colors.yellow}>
        <BodyText>Begynn</BodyText>
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
  },
})

export default PageTwo
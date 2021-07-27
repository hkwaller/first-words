import React from 'react'
import { View, StyleSheet } from 'react-native'
import { animals, SCREEN_WIDTH } from 'src/config/constants'
import AnimalButton from '../AnimalButton'
import Button from '../Button'
import { BodyText } from '../styled'

function PageTwo({ close }: { close: () => void }) {
  return (
    <View style={styles.pageContainer}>
      <BodyText>Hvilket dyr vil du være?</BodyText>
      <View style={styles.animalContainer}>
        {animals.map(animal => {
          return <AnimalButton key={animal.name} {...{ animal }} />
        })}
      </View>
      <Button title="Begynn!" onPress={close} />
    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    width: SCREEN_WIDTH - 40,
    padding: 20,
  },
  animalContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default PageTwo

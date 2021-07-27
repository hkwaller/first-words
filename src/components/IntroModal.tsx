import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { StyleSheet } from 'react-native'
import { View, Image, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { animals, SCREEN_HEIGHT, SCREEN_WIDTH } from 'src/config/constants'
import AnimalButton from './AnimalButton'
import Button from './Button'
import { BodyText, Header } from './styled'

type Props = {
  isVisible: boolean
  setModalVisible: (visible: boolean) => void
}

function IntroModal({ isVisible, setModalVisible }: Props) {
  const [activePage, setActivePage] = useState(0)
  const scrollViewRef = useRef<ScrollView>(null)

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: SCREEN_WIDTH - 40,
      })
    }
  }, [activePage])

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => setModalVisible(false)}
      onModalHide={() => setActivePage(0)}
    >
      <View style={styles.scrollViewWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={scrollViewRef}
        >
          <PageOne navigate={() => setActivePage(1)} />
          <PageTwo close={() => setModalVisible(false)} />
        </ScrollView>
      </View>
    </Modal>
  )
}

function PageOne({ navigate }: { navigate: () => void }) {
  return (
    <View style={styles.pageContainer}>
      <Header>Velkommen</Header>
      <BodyText style={{ marginVertical: 40 }}>
        Velkommen til Emma, appen som lærer deg ord og bokstaver i et rasende tempo.
      </BodyText>
      <BodyText>Før vi starter så må vi bare etablere et par ting. </BodyText>

      <TextInput placeholder="Hva heter du?" />
      <View style={{ flex: 1 }} />
      <Button title="Videre" onPress={navigate} />
    </View>
  )
}

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
  scrollViewWrapper: {
    backgroundColor: 'white',
    marginHorizontal: -20,
    marginBottom: -20,
    padding: 20,
    minHeight: SCREEN_HEIGHT / 2,
    marginTop: 'auto',
  },
  pageContainer: {
    width: SCREEN_WIDTH - 40,
    padding: 20,
  },
  animalContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default IntroModal

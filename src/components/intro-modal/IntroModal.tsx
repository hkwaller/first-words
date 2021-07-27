import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { StyleSheet } from 'react-native'
import { View, ScrollView } from 'react-native'
import Modal from 'react-native-modal'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'src/config/constants'
import PageOne from './PageOne'
import PageTwo from './PageTwo'

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
    <Modal isVisible={isVisible} onModalHide={() => setActivePage(0)}>
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

const styles = StyleSheet.create({
  scrollViewWrapper: {
    backgroundColor: 'white',
    marginHorizontal: -20,
    marginBottom: -20,
    padding: 20,
    minHeight: SCREEN_HEIGHT / 2,
    marginTop: 'auto',
  },
})

export default IntroModal

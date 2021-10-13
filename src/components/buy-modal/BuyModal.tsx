import React, { useState, useEffect, useMemo } from 'react'
import { TextInput } from 'react-native'
import { sample } from 'lodash'
import { getUniqueId } from 'react-native-device-info'
import { View, StyleSheet, Alert } from 'react-native'
import { view } from '@risingstack/react-easy-state'
import Iaphub from 'react-native-iaphub'
import Modal from 'react-native-modal'
import { state } from 'src/backend/data'
import { colors, SCREEN_HEIGHT } from 'src/config/constants'
import { save } from 'src/config/helpers'
import { BodyText, Header } from '../styled'
import questions from './questions'
import SmallButton from '../SmallButton'
import { t } from 'src/backend/lang'

type Props = {
  isVisible: boolean
  setModalVisible: (visible: boolean) => void
}

function BuyModal({ isVisible, setModalVisible }: Props) {
  const [buyButtonVisible, setBuyButtonVisible] = useState(false)
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    if (parseInt(answer) === question?.answer) {
      setBuyButtonVisible(true)
    } else {
      setBuyButtonVisible(false)
    }
  }, [answer])

  const question = useMemo(() => sample(questions), [])

  return (
    <Modal isVisible={isVisible} avoidKeyboard onBackdropPress={() => setModalVisible(false)}>
      <View style={styles.scrollViewWrapper}>
        <Header style={{ marginBottom: 20 }}>{t('buy')}</Header>
        <BodyText>{t('parental_gate_text')}</BodyText>
        <BodyText style={{ marginTop: 20, marginBottom: 8 }}>
          {question?.question[state.settings.language]}
        </BodyText>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder={t('parental_gate_placeholder')}
            placeholderTextColor={colors.darkGray}
            onChangeText={val => setAnswer(val)}
            style={{ backgroundColor: colors.lightPink, padding: 16, minWidth: 200 }}
          />
        </View>
        {buyButtonVisible ? (
          <SmallButton
            title={t('buy')}
            onPress={async () => {
              try {
                const id = getUniqueId()
                await Iaphub.setUserId(id)
                const products = await Iaphub.getProductsForSale()

                try {
                  await Iaphub.buy('astrid_premium_2', {
                    onReceiptProcess: receipt => {
                      console.log('🚀 ~ file: Start.tsx ~ line 103 ~ onPress={ ~ receipt', receipt)
                      console.log('Purchase success, processing receipt...')
                    },
                  })

                  Alert.alert(
                    'Purchase successful',
                    'Your purchase has been processed successfully!',
                  )

                  setModalVisible(false)
                  state.settings.purchased = true
                  save('settings', JSON.stringify(state.settings))
                } catch (e) {
                  console.log('🚀 ~ file: Start.tsx ~ line 114 ~ onPress={ ~ e', e)
                }
              } catch (e) {
                console.log('🚀 ~ file: Start.tsx ~ line 118 ~ onPress={ ~ e', e)
              }
            }}
          />
        ) : (
          <SmallButton title="Lukk" onPress={() => setModalVisible(false)} />
        )}
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
})

export default view(BuyModal)

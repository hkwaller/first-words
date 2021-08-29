import React from 'react'
import { View, Alert } from 'react-native'
import { view } from '@risingstack/react-easy-state'
import { getAvailablePurchases } from 'react-native-iap'
import { state } from 'src/backend/data'
import SmallButton from 'src/components/SmallButton'
import { colors } from 'src/config/constants'
import { t } from 'src/backend/lang'

function Restore() {
  const restore = async () => {
    try {
      await getAvailablePurchases()
      Alert.alert(t('restore_success'))
      state.settings.hasPurchased = true
    } catch (err) {
      console.warn(err.message)
    }
  }

  return (
    <View>
      <SmallButton title={t('restore')} onPress={restore} backgroundColor={colors.blue} />
    </View>
  )
}

export default view(Restore)

import React from 'react'
import { View, Alert } from 'react-native'
import { view } from '@risingstack/react-easy-state'
import { getUniqueId } from 'react-native-device-info'
import Iaphub from 'react-native-iaphub'
import { state } from 'src/backend/data'
import SmallButton from 'src/components/SmallButton'
import { colors } from 'src/config/constants'
import { t } from 'src/backend/lang'
import { save } from 'src/config/helpers'

function Restore() {
  const restore = async () => {
    try {
      const id = getUniqueId()
      await Iaphub.setUserId(id)
      await Iaphub.restore()
      Alert.alert(t('restore_success'))
      state.settings.purchased = true
      save('settings', JSON.stringify(state.settings))
    } catch (err: any) {
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

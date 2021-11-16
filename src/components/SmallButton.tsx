import React from 'react'
import { StyleSheet, View } from 'react-native'
import { t } from 'src/backend/lang'
import { colors } from 'src/config/constants'
import { ButtonText, SmallButtonContainer } from './styled'

type Props = {
  onPress: () => void
  title: string
  backgroundColor?: string
  rotation?: number
  loading?: boolean
}

function SmallButton({
  onPress,
  title,
  backgroundColor = '#AAE0FC',
  rotation = 2,
  loading = false,
}: Props) {
  return (
    <SmallButtonContainer
      onPress={onPress}
      color={loading ? colors.darkGray : backgroundColor}
      rotation={rotation}
      style={[
        {
          alignSelf: 'center',
          marginBottom: 20,
          shadowColor: 'gray',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 3,
        },
        styles.container,
      ]}
    >
      <ButtonText style={{ marginHorizontal: 15, fontSize: 30, textAlign: 'center' }}>
        {loading ? t('loading') : title}
      </ButtonText>
    </SmallButtonContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  line: {
    position: 'absolute',
  },
  topLine: {
    right: 20,
    top: 0,
  },
  bottomLine: {
    left: 20,
    bottom: 0,
  },
})

export default SmallButton

import React from 'react'
import { ButtonText, SmallButtonContainer } from './styled'

type Props = {
  onPress: () => void
  title: string
}

function SmallButton({ onPress, title }: Props) {
  return (
    <SmallButtonContainer onPress={onPress}>
      <ButtonText style={{ fontSize: 16 }}>{title}</ButtonText>
    </SmallButtonContainer>
  )
}

export default SmallButton

import React from 'react'
import { ButtonContainer, ButtonText } from './styled'

type Props = {
  onPress: () => void
  title: string
}

function Button({ onPress, title }: Props) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}
export default Button

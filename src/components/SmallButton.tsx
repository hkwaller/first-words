import React from 'react'
import { state } from 'src/backend/data'
import { ButtonText, SmallButtonContainer } from './styled'

type Props = {
  onPress: () => void
  title: string
}

function SmallButton({ onPress, title }: Props) {
  return (
    <SmallButtonContainer
      onPress={onPress}
      style={{
        backgroundColor: isActiveLanguage(title) ? 'palevioletred' : 'white',
      }}
    >
      <ButtonText
        style={{ fontSize: 16, color: isActiveLanguage(title) ? 'white' : 'palevioletred' }}
      >
        {title}
      </ButtonText>
    </SmallButtonContainer>
  )
}

function isActiveLanguage(lang: string) {
  if (state.settings.language === 'no' && lang === 'Norska') return true
  else if (state.settings.language === 'en' && lang === 'Svenska') return true
  else if (state.settings.language === 'sv' && lang === 'English') return true
  return false
}

export default SmallButton

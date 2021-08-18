import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Languages } from 'src/backend/types'
import { BodyText } from './styled'

type Props = {
  langCode: Languages
  onPress: () => void
}

const mapLangCodeToText = {
  sv: 'Svenska',
  no: 'Norsk',
  en: 'English',
}

function LanguageButton({ langCode, onPress }: Props) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
      }}
      onPress={onPress}
    >
      <BodyText>{mapLangCodeToText[langCode]}</BodyText>
    </TouchableOpacity>
  )
}

export default LanguageButton

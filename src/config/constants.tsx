import { Dimensions } from 'react-native'

export const SCREEN_WIDTH = Dimensions.get('screen').width
export const SCREEN_HEIGHT = Dimensions.get('screen').height

export const CARD_WIDTH = SCREEN_WIDTH - 100

export const ALPHABET = {
  sv: 'abcdefghijklmnopqrstuvwqxyzåäö',
  en: 'abcdefghijklmnopqrstuvwxyz',
  no: 'abcdefghijklmnopqrstuvwxycæåø',
}

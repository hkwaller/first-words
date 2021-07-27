import { Dimensions } from 'react-native'
import { Animal } from 'src/backend/types'

export const SCREEN_WIDTH = Dimensions.get('screen').width
export const SCREEN_HEIGHT = Dimensions.get('screen').height

export const CARD_WIDTH = SCREEN_WIDTH - 100

export const ALPHABET = {
  sv: 'abcdefghijklmnopqrstuvwqxyzåäö',
  en: 'abcdefghijklmnopqrstuvwxyz',
  no: 'abcdefghijklmnopqrstuvwxycæåø',
}

export const colors = {
  blue: '#AAE0FC',
  yellow: '#FCEA9F',
  pink: '#E9A7A3',
  darkGray: '#636161',
  lightBlue: '#A0C1FF',
  lightPink: '#F3AECE',
}

export const animals: Animal[] = [
  { name: 'bear', color: '#9e7660', image: require('../../assets/animals/bear.png') },
  { name: 'fox', color: '#ec6524', image: require('../../assets/animals/fox.png') },
  { name: 'lion', color: '#ef9748', image: require('../../assets/animals/lion.png') },
  { name: 'rabbit', color: '#c1bca6', image: require('../../assets/animals/rabbit.png') },
]

export const s = [
  '#00ADFF',
  '#00FFFF',
  '#4FFF00',
  '#FFFF00',
  '#FF5E00',
  '#FF0010',
  '#FF00DF',
  '#A200FF',
  '#0000FF',
  '#0096FF',
  '#19FFDB',
  '#33FF52',
  '#8BFF4C',
  '#FFFF65',
  '#FFAE7E',
  '#FF9898',
  '#FFB1FE',
  '#EFCAFF',
  '#E3E3FF',
  '#FCFEFF',
]

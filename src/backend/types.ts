import { ImageRequireSource } from 'react-native'

export type Word = {
  _id: string
  word: any
  image: ImageData
}

export type Category = {
  _id: string
  title: string
}

export type Languages = 'no' | 'sv' | 'en'

export type Animal = {
  name: string
  color: string
  image: ImageRequireSource
}

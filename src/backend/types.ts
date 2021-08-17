import { ImageRequireSource } from 'react-native'

export type Word = {
  _id: string
  word: any
  image: ImageData
  category: Category
}

export type Category = {
  _id: string
  title: any
}

export type Languages = 'no' | 'sv' | 'en'

export type Animal = {
  name: string
  color: string
  image: ImageRequireSource
}

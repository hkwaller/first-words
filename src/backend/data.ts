import { store as easyStore } from '@risingstack/react-easy-state'
import { animals } from 'src/config/constants'
import { Animal, Word, Category } from './types'

type State = {
  words: Word[]
  alphabet: string[]
  currentGame: Word[]
  categories: Category[]
  currentCategories: string[]
  animal: Animal
  settings: {
    language: 'no' | 'sv' | 'en'
    name: string
    preferredAmountWords: number
    wordsPlayed: number
    wordsLearnt: string[]
  }
}

export const state = easyStore<State>({
  words: [],
  alphabet: [],
  currentGame: [],
  categories: [],
  currentCategories: [],
  animal: animals[0],
  settings: {
    language: 'no',
    name: 'Amalie',
    preferredAmountWords: 10,
    wordsPlayed: 0,
    wordsLearnt: ['b6b3a8d4-3ac4-4c91-9eea-99d3a407b59a'],
  },
})

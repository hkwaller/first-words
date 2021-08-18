import { store as easyStore } from '@risingstack/react-easy-state'
import { animals } from 'src/config/constants'
import { Animal, Word, Category } from './types'

type State = {
  words: Word[]
  alphabet: string[]
  currentGame: Word[]
  categories: Category[]
  currentCategories: string[]
  settings: {
    language: 'no' | 'sv' | 'en'
    name?: string
    animal?: Animal
    preferredAmountWords: number
    wordsPlayed: number
    wordsLearnt: string[]
    lastWordCount: number
  }
}

export const state = easyStore<State>({
  words: [],
  alphabet: [],
  currentGame: [],
  categories: [],
  currentCategories: [],
  settings: {
    language: 'no',
    name: '',
    preferredAmountWords: 10,
    wordsPlayed: 0,
    wordsLearnt: [],
    lastWordCount: 0,
  },
})

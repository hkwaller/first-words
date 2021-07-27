import { store as easyStore } from '@risingstack/react-easy-state'
import { animals } from 'src/config/constants'
import { Animal, Word, Category } from './types'

type State = {
  words: Word[]
  alphabet: string[]
  currentGame: Word[]
  categories: Category[]
  currentCategories: Category[]
  animal: Animal
  settings: {
    language: 'no' | 'sv' | 'en'
    name: string
    preferredAmountWords: number
    wordsPlayed: number
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
  },
})

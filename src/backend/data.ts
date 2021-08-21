import { store as easyStore } from '@risingstack/react-easy-state'
import { Animal, Word, Category } from './types'

type State = {
  words: Word[]
  alphabet: string[]
  currentGame: Word[]
  categories: Category[]
  currentCategories: string[]
  currentLetterCategory: 'consonants' | 'vowels' | 'all'
  currentLetterCasing: 'uppercase' | 'lowercase' | 'mixed'
  currentLettersGame: string
  settings: {
    language: 'no' | 'sv' | 'en'
    name?: string
    animal?: Animal
    preferredAmountWords: number
    preferredAmountLetters: number
    wordsPlayed: number
    wordsLearnt: string[]
    lastWordCount: number
    hasPurchased?: boolean
  }
}

export const state = easyStore<State>({
  words: [],
  alphabet: [],
  currentGame: [],
  categories: [],
  currentCategories: [],
  currentLetterCategory: 'all',
  currentLetterCasing: 'uppercase',
  currentLettersGame: '',
  settings: {
    language: 'no',
    name: '',
    preferredAmountWords: 10,
    preferredAmountLetters: 10,
    wordsPlayed: 0,
    wordsLearnt: [],
    lastWordCount: 0,
  },
})

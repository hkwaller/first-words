import { autoEffect, store as easyStore } from '@risingstack/react-easy-state'
import { save } from 'src/config/helpers'

type State = {
  words: Word[]
  alphabet: string[]
  currentGame: Word[]
  settings: {
    language: 'no' | 'sv' | 'en' | undefined
    name: string
    preferredAmountWords: number
    wordsPlayed: number
  }
}

export const state = easyStore<State>({
  words: [],
  alphabet: [],
  currentGame: [],
  settings: {
    language: undefined,
    name: 'Amalie',
    preferredAmountWords: 10,
    wordsPlayed: 0,
  },
})

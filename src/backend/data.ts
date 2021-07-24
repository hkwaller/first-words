import { store as easyStore } from '@risingstack/react-easy-state'

type State = {
  words: Word[]
  alphabet: string[]
  settings: {
    language: 'no' | 'sv' | 'en' | undefined
    name: string
  }
}

export const state = easyStore<State>({
  words: [],
  alphabet: [],
  settings: {
    language: undefined,
    name: 'Amalie',
  },
})

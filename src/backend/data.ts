import { store as easyStore } from '@risingstack/react-easy-state'

type State = {
  words: Word[]
  alphabet: string[]
  settings:
    | {
        language: 'no' | 'sv' | 'en'
      }
    | undefined
}

export const state = easyStore<State>({
  words: [],
  alphabet: [],
  settings: undefined,
})

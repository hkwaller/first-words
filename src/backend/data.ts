import { store as easyStore } from '@risingstack/react-easy-state'

type State = {
  words: Word[]
  settings:
    | {
        language: 'no' | 'sv' | 'en'
      }
    | undefined
}

export const state = easyStore<State>({
  words: [],
  settings: undefined,
})

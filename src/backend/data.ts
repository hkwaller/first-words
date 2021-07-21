import { store as easyStore } from '@risingstack/react-easy-state'

type State = {
  words: Word[]
}

export const state = easyStore<State>({
  words: [],
})

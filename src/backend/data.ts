import { autoEffect, store as easyStore } from '@risingstack/react-easy-state'
import { save } from 'src/config/helpers'

type State = {
  words: Word[]
  settings: {
    language: 'no' | 'sv' | 'en'
  }
}

export const state = easyStore<State>({
  words: [],
  settings: {
    language: 'no',
  },
})

autoEffect(() => {
  save('settings', JSON.stringify(state.settings))
})

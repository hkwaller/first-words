import { autoEffect, store as easyStore } from '@risingstack/react-easy-state'
import { save } from 'src/config/helpers'
import i18n from 'i18n-js'

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
  if (!state || !state.settings) return
  i18n.locale = state.settings.language

  save('settings', JSON.stringify(state.settings))
})

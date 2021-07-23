import { autoEffect, store as easyStore } from '@risingstack/react-easy-state'
import { save } from 'src/config/helpers'
import i18n from 'i18n-js'

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

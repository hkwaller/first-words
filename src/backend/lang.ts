import { state } from './data'

export const translations = {
  no: {
    start: 'Ordlek',
    back: 'Tilbake',
    abc: 'Alfabet',
  },
  sv: {
    start: 'Ordlek',
    back: 'Tilbaka',
    abc: 'Alfabetet',
  },
  en: {
    start: 'Word game',
    back: 'Return',
    abc: 'Alphabet',
  },
}

export type TranslationKey = keyof typeof translations['no']

export function t(key: TranslationKey) {
  return translations[state.settings?.language || 'no'][key]
}

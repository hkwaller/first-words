import { state } from './data'

export const translations = {
  no: {
    start: 'Ordlek',
    back: 'Tilbake',
    abc: 'Alfabet',
    welcome: 'Velkommen',
    setup_word_amount: 'Hvor mange ord?',
  },
  sv: {
    start: 'Ordlek',
    back: 'Tilbaka',
    abc: 'Alfabetet',
    welcome: 'Välkommen',
    setup_word_amount: 'Hur många ord?',
  },
  en: {
    start: 'Word game',
    back: 'Return',
    abc: 'Alphabet',
    welcome: 'Welcome',
    setup_word_amount: 'How many words?',
  },
}

export type TranslationKey = keyof typeof translations['no']

export function t(key: TranslationKey) {
  return translations[state.settings?.language || 'no'][key]
}

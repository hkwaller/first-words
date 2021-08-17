import { state } from './data'

export const translations = {
  no: {
    start: 'Ordlek',
    back: 'Tilbake',
    abc: 'Alfabet',
    welcome: 'Velkommen',
    setup_word_amount: 'Hvor mange ord?',
    setup_categories: 'Hvilke kategorier?',
    only_new_words: 'Vis kun nye ord',
  },
  sv: {
    start: 'Ordlek',
    back: 'Tilbaka',
    abc: 'Alfabetet',
    welcome: 'Välkommen',
    setup_word_amount: 'Hur många ord?',
    setup_categories: 'Vilka kategorier?',
    only_new_words: 'Visa bara nya ord',
  },
  en: {
    start: 'Word game',
    back: 'Return',
    abc: 'Alphabet',
    welcome: 'Welcome',
    setup_word_amount: 'How many words?',
    setup_categories: 'Which categories?',
    only_new_words: 'Only show new words',
  },
}

export type TranslationKey = keyof typeof translations['no']

export function t(key: TranslationKey) {
  return translations[state.settings?.language || 'no'][key]
}

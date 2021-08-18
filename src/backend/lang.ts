import { state } from './data'

export const translations = {
  no: {
    start: 'Bildelek',
    back: 'Tilbake',
    abc: 'Alfabet',
    welcome: 'Velkommen',
    setup_word_amount: 'Hvor mange ord?',
    setup_categories: 'Hvilke kategorier?',
    only_new_words: 'Spill bare med nye ord',
    no_new_words: 'Fant ingen nye ord, prøv andre innstillinger',
    words: 'ord',
    play_more: 'Spill igjen',
  },
  sv: {
    start: 'Bildlek',
    back: 'Tilbaka',
    abc: 'Alfabetet',
    welcome: 'Välkommen',
    setup_word_amount: 'Hur många ord?',
    setup_categories: 'Vilka kategorier?',
    only_new_words: 'Spela bara med nya ord',
    no_new_words: 'Hittade inga nya ord, prova andra inställningar',
    words: 'ord',
    play_more: 'Spela igen',
  },
  en: {
    start: 'Picture game',
    back: 'Return',
    abc: 'Alphabet',
    welcome: 'Welcome',
    setup_word_amount: 'How many words?',
    setup_categories: 'Which categories?',
    only_new_words: 'Play with new words only',
    no_new_words: 'Found no new words, try again',
    words: 'words',
    play_more: 'Play again',
  },
}

export type TranslationKey = keyof typeof translations['no']

export function t(key: TranslationKey) {
  return translations[state.settings?.language || 'no'][key]
}

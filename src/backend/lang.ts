import { state } from './data'

export const translations = {
  no: {
    start: 'Bildelek',
    back: 'Tilbake',
    settings: 'Innstillinger',
    abc: 'Alfabet',
    welcome: 'Velkommen',
    setup_word_amount: 'Hvor mange ord?',
    setup_categories: 'Hvilke kategorier?',
    only_new_words: 'Spill bare med nye ord',
    no_new_words: 'Fant ingen nye ord, prøv andre innstillinger',
    words: 'ord',
    setup_letters: 'Hvor mange bokstaver?',
    setup_letters_type: 'Hva vil du spille med?',
    setup_letters_casing: 'Hvilken type bokstaver?',
    setup_letters_type_all: 'Alle',
    setup_letters_type_consonants: 'Konsonanter',
    setup_letters_type_vowels: 'Vokaler',
    setup_letters_casing_uppercase: 'Store',
    setup_letters_casing_lowercase: 'Små',
    setup_letters_casing_mixed: 'Mikset',
    settings_animal: 'Hvilket dyr vil du være?',
    settings_name: 'Byttet navn siden sist?',
    settings_name_placeholder: 'Hva heter barnet?',
    play_more: 'Spill igjen',
    restore: 'Kjøpt appen tidligere? Trykk her.',
    restore_success: 'Kjøp gjenskapt. Kos deg!',
    buy: 'Lås opp',
  },
  sv: {
    start: 'Bildlek',
    back: 'Tilbaka',
    settings: 'Inställningar',
    abc: 'Alfabetet',
    welcome: 'Välkommen',
    setup_word_amount: 'Hur många ord?',
    setup_categories: 'Vilka kategorier?',
    only_new_words: 'Spela bara med nya ord',
    no_new_words: 'Hittade inga nya ord, prova andra inställningar',
    words: 'ord',
    setup_letters: 'Hur många bokstäver?',
    setup_letters_type: 'Vad vill du spela med?',
    setup_letters_casing: 'Vilken typ av bokstäver?',
    setup_letters_type_all: 'Alla',
    setup_letters_type_consonants: 'Konsonanter',
    setup_letters_type_vowels: 'Vokaler',
    setup_letters_casing_uppercase: 'Stora',
    setup_letters_casing_lowercase: 'Små',
    setup_letters_casing_mixed: 'Mixat',
    settings_animal: 'Vilket djur vill du vara?',
    settings_name: 'Bytt namn sedan sist?',
    settings_name_placeholder: 'Vad heter barnet?',
    play_more: 'Spela igen',
    restore: 'Har du tidigare köpt appen? Tryck här.',
    restore_success: 'Köp återskapat. Ha det så kul!',
    buy: 'Lås upp',
  },
  en: {
    start: 'Picture game',
    back: 'Return',
    settings: 'Settings',
    abc: 'Alphabet',
    welcome: 'Welcome',
    setup_word_amount: 'How many words?',
    setup_categories: 'Which categories?',
    only_new_words: 'Play with new words only',
    no_new_words: 'Found no new words, try again',
    words: 'words',
    setup_letters: 'How many letters?',
    setup_letters_type: 'What kind of letters?',
    setup_letters_casing: 'What casing?',
    setup_letters_type_all: 'All',
    setup_letters_type_consonants: 'Consonants',
    setup_letters_type_vowels: 'Vowels',
    setup_letters_casing_uppercase: 'Uppercase',
    setup_letters_casing_lowercase: 'Lowercase',
    setup_letters_casing_mixed: 'Mixed',
    play_more: 'Play again',
    settings_animal: 'What animal do you want to be?',
    settings_name: 'Changed your name lately?',
    settings_name_placeholder: 'Name of the child?',
    restore: 'Have you previously bought the app. Tap here.',
    restore_success: 'Purchase restore. Enjoy the app!',
    buy: 'Unlock',
  },
}

export type TranslationKey = keyof typeof translations['no']

export function t(key: TranslationKey) {
  return translations[state.settings?.language || 'no'][key]
}

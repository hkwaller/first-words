import { state } from './data'

export const translations = {
  no: {
    start: 'Begynn å lære',
    back: 'Tilbake',
  },
  sv: {
    start: 'Börja lära',
    back: 'Tilbaka',
  },
  en: {
    start: 'Start to learn',
    back: 'Return',
  },
}

export type TranslationKey = keyof typeof translations['no']

export function t(key: TranslationKey) {
  return translations[state.settings?.language || 'no'][key]
}

import { state } from './data'

export const translations = {
  no: {
    start: 'Ordlek',
    back: 'Tilbake',
  },
  sv: {
    start: 'Ordlek',
    back: 'Tilbaka',
  },
  en: {
    start: 'Word game',
    back: 'Return',
  },
}

export type TranslationKey = keyof typeof translations['no']

export function t(key: TranslationKey) {
  return translations[state.settings?.language || 'no'][key]
}

import { state } from './data'

export const translations = {
  no: {
    start: 'Begynn å lære',
  },
  sv: {
    start: 'Börja lära',
  },
  en: {
    start: 'Start to learn',
  },
}

export function translate(key: string) {
  return translations[state.settings.language][key] as any
}

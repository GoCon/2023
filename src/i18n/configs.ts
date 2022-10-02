import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translation_en from './en.json'
import translation_ja from './ja.json'

const resources = {
  ja: {
    translation: translation_ja
  },
  en: {
    translation: translation_en
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ja',
  interpolation: {
    escapeValue: false
  }
})

export default i18n

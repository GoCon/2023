import i18n from 'src/i18n/configs'

export const handleChangeLanguage = () => {
  switch (i18n.language) {
    case 'ja':
      i18n.changeLanguage('en')
      return
    case 'en':
      i18n.changeLanguage('ja')
      return
  }
}

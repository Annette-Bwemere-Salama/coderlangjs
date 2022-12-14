export const getLocale = (userConfig, knownLocales) => {

  for (let i = 0; i < knownLocales.length; i++) {
    if (userConfig.locale === knownLocales[i]) {
      return userConfig.locale
    }
  } 
  return "en"
}

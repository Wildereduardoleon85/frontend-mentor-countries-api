function getThemePreferenceFromLS() {
  if (localStorage.getItem('isDarkMode') === 'true') {
    return true
  }
  return false
}

export default getThemePreferenceFromLS

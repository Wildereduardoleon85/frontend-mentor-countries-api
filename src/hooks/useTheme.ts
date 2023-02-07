import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function useTheme() {
  const {
    state: { isDarkMode },
    toggleDarkMode,
  } = useContext(ThemeContext)

  const backgroundColor = isDarkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'
  const textColor = isDarkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
  const elementColor = isDarkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'

  return {
    backgroundColor,
    textColor,
    elementColor,
    toggleDarkMode,
    isDarkMode,
  }
}

export default useTheme

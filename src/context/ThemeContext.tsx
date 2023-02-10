import { createContext } from 'react'

type ThemeContextProps = {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext({} as ThemeContextProps)

export default ThemeContext

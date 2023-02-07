import { createContext } from 'react'
import { ThemeState } from '../types'

type ThemeContextProps = {
  state: ThemeState
  toggleDarkMode: () => void
}

const ThemeContext = createContext({} as ThemeContextProps)

export default ThemeContext

import { useMemo, useState } from 'react'
import { getThemePreferenceFromLS } from '../../helpers'
import ThemeContext from './ThemeContext'

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[]
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    getThemePreferenceFromLS()
  )

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  const memoizedState = useMemo(
    () => ({
      isDarkMode,
      toggleDarkMode,
    }),
    [isDarkMode, toggleDarkMode]
  )

  return (
    <ThemeContext.Provider value={memoizedState}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

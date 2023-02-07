import { useMemo, useReducer } from 'react'
import { ThemeState } from '../types'
import ThemeContext from './ThemeContext'
import themeReducer from './themeReducer'

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const initialState: ThemeState = {
  isDarkMode: false,
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = useReducer(themeReducer, initialState)

  function toggleDarkMode() {
    dispatch({
      type: 'toggleDarkMode',
    })
  }

  const memoizedState = useMemo(
    () => ({
      state,
      toggleDarkMode,
    }),
    [state, dispatch]
  )

  return (
    <ThemeContext.Provider value={memoizedState}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

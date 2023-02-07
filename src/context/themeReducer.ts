import { ThemeState } from '../types'

type ThemeAction = { type: 'toggleDarkMode' }

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  if (action.type === 'toggleDarkMode') {
    return {
      ...state,
      isDarkMode: !state.isDarkMode,
    }
  }
  return state
}

export default themeReducer

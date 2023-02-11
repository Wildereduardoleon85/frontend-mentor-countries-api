import { CountriesState, Country } from '../../types'

type CountriesAction =
  | { type: 'setCountries'; payload: Country[] }
  | { type: 'setLoading'; payload: boolean }
  | { type: 'setError'; payload: string }

function countriesReducer(
  state: CountriesState,
  action: CountriesAction
): CountriesState {
  switch (action.type) {
    case 'setCountries':
      return {
        ...state,
        countries: action.payload,
      }

    case 'setLoading':
      return {
        ...state,
        isLoading: action.payload,
      }

    case 'setError':
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default countriesReducer
